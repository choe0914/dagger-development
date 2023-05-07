from controllers import player_blueprint
from app import app
from flask_cors import cross_origin
from extensions import db
from flask import request
from app import socketio
from model.game import Game
from model.user import User 
from flask_socketio import send
from model.player_state import PlayerState

# All routes for game data and calculations (if needed)
@cross_origin(supports_credentials=True)
@player_blueprint.route('/player')

# Given a playerId, and new position, move the player
@player_blueprint.route('/player/move_player', methods=['POST', 'OPTIONS'], strict_slashes=False)
@cross_origin(supports_credentials=True)
def move_player():
    player = db.session.query(PlayerState).where(PlayerState.playerStateId == request.json["playerId"]).first()
    player.currentPosition = request.json["positionId"]
    db.session.commit()
    game = db.session.query(Game).where(Game.gameId == player.gameId).first()
    
    # Update other players via websockets?
    socketio.emit("update_players", {"players": list(map(lambda player: player.as_dict(), game.players))})
    
    return {"playerId": player.playerStateId, "position": player.currentPosition}
