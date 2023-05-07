from controllers import user_blueprint
from flask_cors import cross_origin
from extensions import db
from model.user import User
from model.game import Game
from flask import request
from model.player_state import PlayerState
from flask import jsonify
from flask import request

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

# Given a userId, gameId, characterId, and positionId, make a new player for the user in the given game
@user_blueprint.route('/user/create', methods=['POST'])
def create_user():

    # Create new user
    user = User(request.json["username"])
    db.session.add(user)
    db.session.commit()

    userId = db.session.query(User).where(User.name == request.json["username"]).first().userId

    # Create new player state
    player_state = PlayerState(
        user.userId,
        request.json["gameId"],
        request.json["characterId"],
        request.json["currentPosition"]
    )
    db.session.add(player_state)

    db.session.commit()
    return {"User": user.as_dict()}

# Given a userId, gameId, characterId, and positionId, make a new player for the user in the given game
@user_blueprint.route('/user/edit', methods=['PUT'])
def edit_user():
    
    # Get the user
    user = db.session.query(User).where(User.name == request.json["username"]).first()
    user.name = request.json["username"]
    player_state = db.session.query(PlayerState).where(PlayerState.userId == user.userId).first()
    player_state.characterId = request.json["characterId"]
    player_state.currentPosition = request.json["currentPosition"]

    db.session.commit()
    return {"User": user.as_dict()}


@user_blueprint.route('/user/get_all')
def get_all_users():
    # Create Example user
    users = list(map(lambda game: game.as_dict(), db.session.query(User).all()))
    return {"users": users}