from flask_socketio import send, join_room, leave_room
from app import socketio
from extensions import db
from flask import request
import random
from model.game import Game
from model.user import User
from model.player_state import PlayerState
from model.card_info import CardInfo
from model.game_card import GameCard
from utils.constants import CARD_TYPES, ROOMS

# Global variable for responding to a suggestion
suggestionId = None

# Socket representation of the join api route
# Stored in dictionary of userId, gameId, characterId, and positionId

@socketio.on("joined")
def joined(gameRoom):
    user = db.session.query(User).where(
        User.userId == gameRoom["userId"]).first()
    game = db.session.query(Game).where(
        Game.gameId == gameRoom["gameId"]).first()
    # Create new playerState and add it to db
    db.session.add(PlayerState(gameRoom["userId"], gameRoom["gameId"], gameRoom["characterId"],
                               gameRoom["positionId"]))
    db.session.commit()
    # Return the gameId and the current list of players
    # return {"gameId": game.gameId, "players": list(map(lambda player: player.as_dict(), game.players))}
    join_room(gameRoom)

# Socket representation of the start game api route

@socketio.on('broadcast')
def on_broadcast(data):
    socketio.emit('broadcast', data)  # bp.emit same as socketio.emit

@socketio.on("start")
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
    for weapon_token in db.session.query(GameCard).join(CardInfo).where(CardInfo.cardType == CARD_TYPES.TOKEN).all():
        weapon_token.currentRoom = room_list[room_index]
        room_index += 1

    # Get cards of each type
    weapon_cards = db.session.query(GameCard).join(CardInfo).where(
        CardInfo.cardType == CARD_TYPES.WEAPON).all()
    suspect_cards = db.session.query(GameCard).join(CardInfo).where(
        CardInfo.cardType == CARD_TYPES.SUSPECT).all()
    room_cards = db.session.query(GameCard).join(CardInfo).where(
        CardInfo.cardType == CARD_TYPES.ROOM).all()

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

    # Update all the players in the room
    send("Response", game, to=game.gameId)

    # Return game info
    # return {"gameInfo": game.as_dict()}

# Socket representation of the move api route


@socketio.on('move')
def move_player(moveRequest):
    player = db.session.query(User).where(
        User.userId == moveRequest["userId"]).first()
    game = db.session.query(Game).where(
        Game.gameId == moveRequest["gameId"]).first()
    player.current_position = moveRequest["positionId"]
    db.session.commit()
    # Update other players via websockets?
    send("Response", game, to=game.gameId)
    # return {"playerId": player.playerStateId, "position": player.currentPosition}


@socketio.on('accusation')
def check_win(accusation):
    # accusation in format of gameId, person, weapon, room
    success = "Win"
    fail = "Lose"

    # Get the room list so we can update the tokens
    room_list = list(ROOMS.values())

    # Query the database to update player position, where a weapon token is, and where a character is.
    player = db.session.query(PlayerState).where(
        PlayerState.characterId == accusation["characterId"]).first()
    card = db.session.query(GameCard).where(
        GameCard.gameCardId == accusation["weaponId"]).first()
    game = db.session.query(Game).where(
        Game.gameId == accusation["gameId"]).first()
    player.current_position = accusation["roomId"]
    card.currentRoom = room_list[accusation["roomId"]]
    db.session.commit()

    # Remove the first entry for easier hand checking
    accusation.pop(0)

    # Update other players via websockets the playersates and where the weapon token is
    send("Response", (game, card.currentRoom), to=game.gameId)

    # Check if the character, weapon, and room ar correct
    if accusation == game.winningHand:
        # If it was a success,
        send(success, to=game.gameId)
        # return {"result": success}
    else:
        send(fail, to=game.gameId)
        # return {"result": fail}


@socketio.on('join_game')
def join_game_room(data):
    room = data['room']
    join_room(room)
    return


@socketio.on('suggestion')
def check_suggestion(suggestion):
    # suggestion in format of gameId, person, weapon, room
    # Get the room list so we can update the tokens
    room_list = list(ROOMS.values())

    # Query the database to update player position, where a weapon token is, and where a character is.
    player = db.session.query(PlayerState).where(
        PlayerState.characterId == suggestion["characterId"]).first()
    card = db.session.query(GameCard).where(
        GameCard.gameCardId == suggestion["weaponId"]).first()
    game = db.session.query(Game).where(
        Game.gameId == suggestion["gameId"]).first()
    player.current_position = suggestion["roomId"]
    card.currentRoom = room_list[suggestion["roomId"]]
    db.session.commit()

    # Update other players via websockets the playersates and where the weapon token is
    # Additionally, send them all the guess items
    send("Response", (game, card.currentRoom,
         suggestion["characterId"], suggestion["weaponId"], suggestion["roomId"]), to=game.gameId)

    # Set the global variable for users to respond to a player who made a suggestion
    suggestionId = request.json["sid"]
    # return {"result": "success"}


@socketio.on('suggestion-response')
def check_sugg(usrResponse):
    # Send responses to the suggestion creator for the various cards.
    if usrResponse["weaponId"] is not None:
        send("Response", usrResponse["weaponId"], to=suggestionId)
    elif usrResponse["characterId"] is not None:
        send("Response", usrResponse["characterId"], to=suggestionId)
    elif usrResponse["roomId"] is not None:
        send("Response", usrResponse["characterId"], to=suggestionId)
