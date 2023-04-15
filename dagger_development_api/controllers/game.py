from dagger_development_api.controllers import game_blueprint
from flask_cors import cross_origin
from dagger_development_api.extensions import db
from .. import socketio
from flask import request
import random
from dagger_development_api.model.game import Game
from dagger_development_api.model.user import User 
from dagger_development_api.model.player_state import PlayerState
from dagger_development_api.model.card_info import CardInfo
from dagger_development_api.model.game_card import GameCard
from dagger_development_api.utils.constants import CARD_TYPES, ROOMS
from flask_socketio import send, join_room, leave_room


# All routes for game data and calculations (if needed)
@cross_origin(supports_credentials=True)
@game_blueprint.route('/game')
# Create a new game
@game_blueprint.route('/game/create')
def create_game():
    game = Game("")
    db.session.add(game)
    db.session.commit()
    return {"gameId": game.gameId}

# Get all gameIds
@game_blueprint.route('/game/get_all')
def get_all():
    games = list(map(lambda game: game.as_dict(), db.session.query(Game).all()))
    # Return a list of all the games
    return {"games": games}

@game_blueprint.route('/game/get_room_contents', methods=['POST'])
def get_room_contents():
    # Get all the weapon tokens
    weapon_tokens = list(map(lambda card: card.as_dict(), db.session.query(GameCard)\
        .where(GameCard.gameId == request.json["gameId"])\
        .where(GameCard.currentRoom == request.json["roomId"]).all()))
    # Get all the player tokens
    player_tokens = list(map(lambda player: player.as_dict(), db.session.query(PlayerState)\
        .where(PlayerState.gameId == request.json["gameId"])\
        .where(PlayerState.currentPosition == request.json["roomId"]).all()))
    
    return {"player_tokens": player_tokens, "weapon_tokens": weapon_tokens}

@game_blueprint.route('/game/get_all_board_pieces', methods=['POST'])
def get_all_board_pieces():
     # Get all the weapon tokens
    weapon_tokens = list(map(lambda card: card.as_dict(), db.session.query(GameCard)\
        .where(GameCard.gameId == request.json["gameId"]).all()))
    # Get all the player tokens
    player_tokens = list(map(lambda player: player.as_dict(), db.session.query(PlayerState)\
        .where(PlayerState.gameId == request.json["gameId"]).all()))
    
    return {"player_tokens": player_tokens, "weapon_tokens": weapon_tokens}

# Given a userId, gameId, characterId, and positionId, make a new player for the user in the given game
@game_blueprint.route('/game/join', methods=['POST'])
def join_game():
    user = db.session.query(User).where(User.name == request.json["userName"]).first()
    game = db.session.query(Game).where(Game.gameId == request.json["gameId"]).first()
    player = PlayerState(user.userId, request.json["gameId"], request.json["characterId"], \
        request.json["positionId"])
    # Create new playerState and add it to db
    db.session.add(player)
    db.session.commit()
    #Have the player join a room
    socketio.emit("update_players", {"players": list(map(lambda player: player.as_dict(), game.players))}, room=game.gameId)
    # Return the gameId and the current list of players
    return {"gameId": game.gameId, "yourPlayer": player.as_dict(), "players": list(map(lambda player: player.as_dict(), game.players))}

# Start the given game.  Create a deck and deal cards
@game_blueprint.route('/game/start/<gameId>')
def start_game(gameId):
    game = db.session.query(Game).where(Game.gameId == gameId).first()
    # Create game deck
    for card_info in db.session.query(CardInfo).all():
        db.session.add(GameCard(card_info.cardInfoId, gameId))
    db.session.commit()

    # Randomly assign a room to each token
    room_list = list(ROOMS.values())
    random.shuffle(room_list)
    room_index = 0
    token_list = db.session.query(GameCard).where(GameCard.gameId == game.gameId)\
            .join(CardInfo, CardInfo.cardInfoId == GameCard.cardInfoId)\
            .where(CardInfo.cardType == CARD_TYPES.TOKEN).all()
    for weapon_token in token_list:
        weapon_token.currentRoom = room_list[room_index]
        room_index += 1

    # Get cards of each type
    weapon_cards = db.session.query(GameCard).join(CardInfo).where(CardInfo.cardType == CARD_TYPES.WEAPON).all()
    suspect_cards = db.session.query(GameCard).join(CardInfo).where(CardInfo.cardType == CARD_TYPES.SUSPECT).all()
    room_cards = db.session.query(GameCard).join(CardInfo).where(CardInfo.cardType == CARD_TYPES.ROOM).all()

    # Shuffle the cards
    random.shuffle(weapon_cards)
    random.shuffle(suspect_cards)
    random.shuffle(room_cards)
    deckIndex = 0

    # Assign cards to players and to the winning hand
    for player in game.players:
        player.hand.append(weapon_cards[deckIndex])
        player.hand.append(suspect_cards[deckIndex])
        player.hand.append(room_cards[deckIndex])
        deckIndex += 1
    game.winningHand.append(weapon_cards[deckIndex])
    game.winningHand.append(suspect_cards[deckIndex])
    game.winningHand.append(room_cards[deckIndex])

    db.session.commit()

    #Update all the players in the room
    socketio.emit("update_game", {"game": game.as_dict()}, room=game.gameId)

    # Return game info
    return {"gameInfo": game.as_dict()}

@game_blueprint.route('/game/accusation')
def check_win(accusation):
    #accusation in format of gameId, person, weapon, room
    success = "Win"
    fail = "Lose"

    #Get the room list so we can update the tokens
    room_list = list(ROOMS.values())

    #Query the database to update player position, where a weapon token is, and where a character is.
    player = db.session.query(PlayerState).where(PlayerState.characterId == accusation["characterId"]).first()
    card = db.session.query(GameCard).where(GameCard.gameCardId == accusation["weaponId"]).first()
    game = db.session.query(Game).where(Game.gameId == accusation["gameId"]).first()
    player.current_position = accusation["roomId"]
    card.currentRoom = room_list[accusation["roomId"]]
    db.session.commit()

    #Remove the first entry for easier hand checking
    accusation.pop(0)

    # Update other players via websockets the playersates and where the weapon token is
    socketio.emit("update_players", \
        {"players": list(map(lambda player: player.as_dict(), game.players)), "currentRoom": card.currentRoom}, \
        room=game.gameId)

    #Check if the character, weapon, and room ar correct
    if accusation == game.winningHand:
        #If it was a success, 
        socketio.emit("win_status", {"status": "Success"}, room=game.gameId)
        return {"result": success}
    else:
        socketio.emit("win_status", {"status": "Fail"}, room=game.gameId)
        return {"result": fail}