from dagger_development_api.controllers import game_blueprint
from flask_cors import cross_origin
from dagger_development_api.extensions import db

# All routes for game data and calculations (if needed)
@cross_origin(supports_credentials=True)
@game_blueprint.route('/game')

@game_blueprint.route('/game/cal_mvmnt')
def calc_mvmnt():
    return {"message": "test"}

@game_blueprint.route('/user/suggestion')
def ask_users_suggestion():
    return {"message": "test"}

@game_blueprint.route('/user/accusation')
def check_win():
    return {"message": "test"}