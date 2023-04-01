from dagger_development_api.controllers import game_blueprint
from flask_cors import cross_origin
from dagger_development_api.utils import utils

# All routes for game data and calculations (if needed)
@cross_origin(supports_credentials=True)
@game_blueprint.route('/game')

@game_blueprint.route('/game/start/<gameid>')
def start_game(gameID):
    
    value = utils.start_game(gameID)

    return {"message": "test"}

@game_blueprint.route('/game/cal_mvmnt')
def calc_mvmnt():
    return {"message": "test"}

@game_blueprint.route('/game/suggestion')
def ask_users_suggestion():
    return {"message": "test"}

@game_blueprint.route('/game/accusation')
def check_win():
    return {"message": "test"}