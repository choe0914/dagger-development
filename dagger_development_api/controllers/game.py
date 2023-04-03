from dagger_development_api.controllers import game_blueprint
from flask_cors import cross_origin
from dagger_development_api.utils import utils
from dagger_development_api.extensions import db
from dagger_development_api.model.user import User
from dagger_development_api.model.game import Game
from dagger_development_api.model.player_state import PlayerState

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

@game_blueprint.route('/game/accusation/<accusation>')
def check_win(accusation):
    #accusation in format of gameID, person, weapon, room

    success = "Win"
    fail = "Lose"
    
    user_obj = db.session.query(Game).where(Game.gameId == accusation[0]).first()

    accusation.pop(0)

    if accusation == user_obj.winningHand:
        return {"result": success}
    else:
        return {"result": fail}