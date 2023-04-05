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
def add_user(username):
    # Create Example user
    user = User(username)
    db.session.add(user)
    db.session.commit()
    return {"User": user.as_dict()}

@user_blueprint.route('/user/get_all')
def get_all_users():
    # Create Example user
    users = list(map(lambda game: game.as_dict(), db.session.query(User).all()))
    return {"users": users}