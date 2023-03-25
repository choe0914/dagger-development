from dagger_development_api.controllers import game_blueprint
from flask_cors import cross_origin
from dagger_development_api.extensions import db

# All routes for game data and calculations (if needed)
@cross_origin(supports_credentials=True)
@game_blueprint.route('/game')

def calc_mvmnt():
    return {"message": "test"}

def ask_users_suggestion():
    return {"message": "test"}

def check_win():
    return {"message": "test"}