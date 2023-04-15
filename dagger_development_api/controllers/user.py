from dagger_development_api.controllers import user_blueprint
from flask_cors import cross_origin
from dagger_development_api.extensions import db
from dagger_development_api.model.user import User
from dagger_development_api.model.game import Game
from flask import request
from dagger_development_api.model.player_state import PlayerState
from flask import jsonify

# All routes for user data go here
@user_blueprint.route('/user/create', methods=["POST"])
def add_user():
    # Create Example user
    user = User(request.json["userName"])
    db.session.add(user)
    db.session.commit()
    response = jsonify({"User": user.as_dict()})
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response

@user_blueprint.route('/user/get_all')
def get_all_users():
    # Create Example user
    users = list(map(lambda game: game.as_dict(), db.session.query(User).all()))
    return {"users": users}