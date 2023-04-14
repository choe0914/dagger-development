from dagger_development_api.controllers import player_blueprint
from flask_cors import cross_origin
from dagger_development_api.extensions import db
from flask import request
from dagger_development_api.model.game import Game
from dagger_development_api.model.user import User 
from dagger_development_api.model.player_state import PlayerState

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
    # Update other players via websockets?
    return {"playerId": player.playerStateId, "position": player.currentPosition}
