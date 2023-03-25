from dagger_development_api.controllers import game_blueprint
from flask_cors import cross_origin
from dagger_development_api.extensions import db

# All routes for game data and calculations (if needed)
@cross_origin(supports_credentials=True)
@game_blueprint.route('/game')

@game_blueprint('/calc_mvmnt')
def valid_invalid():
    return "test"

@game_blueprint('/suggestion')
def ask_users_suggestion():
    return "test"

@game_blueprint('/accusation')
def check_win():
    return "test"