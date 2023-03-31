from dagger_development_api.controllers import user_blueprint
from flask_cors import cross_origin
from dagger_development_api.extensions import db
from dagger_development_api.model.user import User
from dagger_development_api.model.game import Game
from dagger_development_api.model.player_state import PlayerState
from flask import jsonify

# All routes for user data go here
@cross_origin(supports_credentials=True)
@user_blueprint.route('/user/<username>')
def example_user_route(username):
    # Create Example user
    user = User(username)
    print("Username: " + username)
    db.session.add(user)

    # Create example Game
    game = Game("123")
    db.session.add(game)
    db.session.commit()

    # Create player state for user and game
    ps = PlayerState(user.userId, game.gameId, 0, 0)
    db.session.add(ps)
    db.session.commit()

    # Create Response
    players = list(map(lambda player: player.as_dict(), game.players))
    playerStates = list(map(lambda player: player.as_dict(), user.playerStates))
    resp = jsonify(players=players, playerStates=playerStates, success=True)
    resp.status_code = 200
    return resp