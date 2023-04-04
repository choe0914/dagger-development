from flask_socketio import send, join_room, leave_room
import socketio
from dagger_development_api.extensions import db
from flask import request
import random
from dagger_development_api.model.game import Game
from dagger_development_api.model.user import User 
from dagger_development_api.model.player_state import PlayerState
from dagger_development_api.model.card_info import CardInfo
from dagger_development_api.model.game_card import GameCard
from dagger_development_api.utils.constants import CARD_TYPES, ROOMS

#Socket representation of the join api route
#Stored in dictionary of userId, gameId, characterId, and positionId
@socketio.on("joined")
def joined(gameRoom):
    user = db.session.query(User).where(User.userId == gameRoom["userId"]).first()
    game = db.session.query(Game).where(Game.gameId == gameRoom["gameId"]).first()
    # Create new playerState and add it to db
    db.session.add(PlayerState(gameRoom["userId"], gameRoom["gameId"], gameRoom["characterId"], \
        gameRoom["positionId"]))
    db.session.commit()
    # Return the gameId and the current list of players
    #return {"gameId": game.gameId, "players": list(map(lambda player: player.as_dict(), game.players))}
    join_room(gameRoom)
    send(game, to=game.gameId)

#Socket representation of the start game api route
@socketio.on.route("start")
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
    send(game, to=game.gameId)

    # Return game info
    #return {"gameInfo": game.as_dict()}

#Socket representation of the move api route
@socketio.on('move')
def move_player(moveRequest):
    player = db.session.query(User).where(User.userId == moveRequest["userId"]).first()
    game = db.session.query(Game).where(Game.gameId == moveRequest["gameId"]).first()
    player.current_position = moveRequest["positionId"]
    db.session.commit()
    # Update other players via websockets?
    send(game.players, to=game.gameId)
    #return {"playerId": player.playerStateId, "position": player.currentPosition}