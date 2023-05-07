from gevent import monkey
monkey.patch_all()

import __init__
from flask_socketio import SocketIO, send, join_room, leave_room

app = __init__.create_app()
socketio = SocketIO(app, cors_allowed_origins="*", logger=True, engineio_logger=True, async_mode = 'gevent',log_output=True, debug=True)

import random
from flask_cors import cross_origin
from flask import request
from extensions import db
from model.game import Game
from model.user import User 
from model.player_state import PlayerState
from model.card_info import CardInfo
from model.game_card import GameCard
from utils.constants import CARD_TYPES, ROOMS

# All routes for game data and calculations (if needed)
@cross_origin(supports_credentials=True)

# Given a playerId, and new position, move the player
@app.route('/player/move_player', methods=['POST', 'OPTIONS'], strict_slashes=False)
@cross_origin(supports_credentials=True)
def move_player():
    player = db.session.query(PlayerState).where(PlayerState.playerStateId == request.json["playerId"]).first()
    player.currentPosition = request.json["positionId"]
    db.session.commit()
    game = db.session.query(Game).where(Game.gameId == player.gameId).first()
    
    # Update other players via websockets?
    socketio.emit("update_players", {"players": list(map(lambda player: player.as_dict(), game.players))})
    
    return {"playerId": player.playerStateId, "position": player.currentPosition}


# All routes for game data and calculations (if needed)
@cross_origin(supports_credentials=True)
# Create a new game
@app.route('/game/create')
def create_game():
    game = Game("")
    db.session.add(game)
    db.session.commit()
    return {"gameId": game.gameId}

# Get all gameIds


@app.route('/game/get_all')
def get_all():
    games = list(map(lambda game: game.as_dict(),
                 db.session.query(Game).all()))
    # Return a list of all the games
    return {"games": games}


@app.route('/game/get_room_contents', methods=['POST'])
def get_room_contents():
    # Get all the weapon tokens
    weapon_tokens = list(map(lambda card: card.as_dict(), db.session.query(GameCard)
                             .where(GameCard.gameId == request.json["gameId"])
                             .where(GameCard.currentRoom == request.json["roomId"]).all()))
    # Get all the player tokens
    player_tokens = list(map(lambda player: player.as_dict(), db.session.query(PlayerState)
                             .where(PlayerState.gameId == request.json["gameId"])
                             .where(PlayerState.currentPosition == request.json["roomId"]).all()))

    return {"player_tokens": player_tokens, "weapon_tokens": weapon_tokens}


@app.route('/game/get_all_board_pieces', methods=['POST'])
def get_all_board_pieces():
    # Get all the weapon tokens
    weapon_tokens = list(map(lambda card: card.as_dict(), db.session.query(GameCard)
                             .where(GameCard.gameId == request.json["gameId"]).all()))
    # Get all the player tokens
    player_tokens = list(map(lambda player: player.as_dict(), db.session.query(PlayerState)
                             .where(PlayerState.gameId == request.json["gameId"]).all()))

    return {"player_tokens": player_tokens, "weapon_tokens": weapon_tokens}

# Given a userId, gameId, characterId, and positionId, make a new player for the user in the given game


@app.route('/game/join', methods=['POST'])
def join_game():
    user = db.session.query(User).where(
        User.name == request.json["userName"]).first()
    game = db.session.query(Game).where(
        Game.gameId == request.json["gameId"]).first()
    player = PlayerState(user.userId, request.json["gameId"], request.json["characterId"],
                         request.json["positionId"])
    # Create new playerState and add it to db
    db.session.add(player)
    db.session.commit()
    # # Have the player join a room
    # socketio.emit("update_players", {"players": list(
    #     map(lambda player: player.as_dict(), game.players))}, broadcast=True, room=game.gameId)
    socketio.emit("update_players", {"players": list(
        map(lambda player: player.as_dict(), game.players))})
    socketio.send("update_players", {"players": "abc123"})
    # Return the gameId and the current list of players
    return {"gameId": game.gameId, "yourPlayer": player.as_dict(), "players": list(map(lambda player: player.as_dict(), game.players))}

# Start the given game.  Create a deck and deal cards


@app.route('/game/start/<gameId>')
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
    weapon_cards = db.session.query(GameCard).join(CardInfo).where(
        CardInfo.cardType == CARD_TYPES.WEAPON).where(GameCard.gameId == gameId).all()
    suspect_cards = db.session.query(GameCard).join(CardInfo).where(
        CardInfo.cardType == CARD_TYPES.SUSPECT).where(GameCard.gameId == gameId).all()
    room_cards = db.session.query(GameCard).join(CardInfo).where(
        CardInfo.cardType == CARD_TYPES.ROOM).where(GameCard.gameId == gameId).all()

    # Shuffle the cards
    random.shuffle(weapon_cards)
    random.shuffle(suspect_cards)
    random.shuffle(room_cards)
    
    # Create winning hand
    game.winningHand.append(weapon_cards.pop())
    game.winningHand.append(suspect_cards.pop())
    game.winningHand.append(room_cards.pop())

    # add the rest to a deck
    deck = weapon_cards + suspect_cards + room_cards
    random.shuffle(deck)

    # Assign cards to players and to the winning hand
    playerIndex = 0
    numPlayers = len(game.players)
    for card in deck:
        game.players[playerIndex % numPlayers].hand.append(card)
        playerIndex += 1
    
    db.session.commit()

    # Update all the players in the room
    socketio.emit("update_game", {"gameInfo": game.as_dict()})

    # Return game info
    return {"gameInfo": game.as_dict()}


@app.route('/game/accusation', methods=["POST"])
def check_win():
    # accusation in format of gameId, person, weapon, room
    accusation = request.json
    success = "Win"
    fail = "Lose"

    # Get the room list so we can update the tokens
    room_list = list(ROOMS.values())

    # Query the database to update player position, where a weapon token is, and where a character is.
    player = db.session.query(PlayerState).where(
        PlayerState.characterId == accusation["characterId"]).first()
    card = db.session.query(GameCard).where(GameCard.gameId == accusation["gameId"])\
        .join(CardInfo, CardInfo.cardInfoId == GameCard.cardInfoId)\
        .where(CardInfo.name == accusation["weaponId"]).first()

    game = db.session.query(Game).where(
        Game.gameId == accusation["gameId"]).first()    
    if player:
        player.currentPosition = accusation["roomId"]
    card.currentRoom = accusation["roomId"]
    db.session.commit()

    # Remove the first entry for easier hand checking
    # accusation.pop(0)

    # Update other players via websockets the playersates and where the weapon token is
    socketio.emit("update_players",
                  {"players": list(map(lambda player: player.as_dict(
                  ), game.players)), "currentRoom": card.currentRoom})

    for card in list(game.winningHand):
        if (card.cardInfo.name != accusation["weaponId"] and card.cardInfo.name != accusation["roomId"] and card.cardInfo.name != accusation["characterId"]):
            socketio.emit("win_status", {"status": "Fail"})
            return {"result": fail}

    socketio.emit("win_status", {"status": "Success", "winningPlayer": accusation["userName"]})
    return {"result": success}


@app.route('/game/suggestion', methods=["POST"])
def make_suggestion():
    # accusation in format of gameId, person, weapon, room
    accusation = request.json
    success = "Win"
    fail = "Lose"

    #Get the room list so we can update the tokens
    room_list = list(ROOMS.values())

    #Query the database to update player position, where a weapon token is, and where a character is.
    accusedPlayer = db.session.query(PlayerState).where(PlayerState.characterId == accusation["characterId"]).first()
    card = db.session.query(GameCard).where(GameCard.gameId == accusation["gameId"])\
        .join(CardInfo, CardInfo.cardInfoId == GameCard.cardInfoId)\
        .where(CardInfo.name == accusation["weaponId"]).first()
    game = db.session.query(Game).where(Game.gameId == accusation["gameId"]).first()
    if accusedPlayer:
        accusedPlayer.currentPosition = accusation["roomId"]
    card.currentRoom = accusation["roomId"]
    db.session.commit() 

    allPlayers = db.session.query(PlayerState).where(PlayerState.gameId == accusation["gameId"]).all()
    # Update other players via websockets the playersates and where the weapon token is
    socketio.emit("update_players", \
        {"players": list(map(lambda player: player.as_dict(), game.players)), "currentRoom": card.currentRoom})

    for player in list(allPlayers):
        for card in list(player.hand):
            if card.cardInfo.name == accusation["weaponId"]:
                return {"result": "Fail", "matchingCard": card.as_dict()}
            if card.cardInfo.name == accusation["roomId"]:
                return {"result": "Fail", "matchingCard": card.as_dict()}
            if card.cardInfo.name == accusation["characterId"]:
                return {"result": "Fail", "matchingCard": card.as_dict()}
    return {"result": "Success"}

if __name__ == '__main__':
    socketio.run(app)