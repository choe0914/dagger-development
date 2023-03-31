from dagger_development_api.controllers import game_blueprint
from flask_cors import cross_origin
from sqlalchemy import select
from sqlalchemy import update
from dagger_development_api.utils import utils
from dagger_development_api.extensions import db
from dagger_development_api.model.user import User
from dagger_development_api.model.game import Game
from dagger_development_api.model.player_state import PlayerState
from flask import jsonify

# All routes for game data and calculations (if needed)
@cross_origin(supports_credentials=True)
@game_blueprint.route('/game')

@game_blueprint.route('/game/start/<gameid>')
def start_game(currentGame):
    currentGame = 123
    handRotation = 0

    #Databse queries for the game we are working with and the player states in them
    gameStmt = select(Game).where(Game.gameId == currentGame)       
    gameResult = db.session.execute(gameStmt)
    playerStmt = select(PlayerState).where(PlayerState.gameId == currentGame)
    playerResult = db.session.execute(playerStmt)

    #For the game that we find, send the player list and calculate the hands
    for user_obj in gameResult.scalars():
        playerList = user_obj.players
        winningHand, playerHands, weaponLayout = utils.start_game(len(playerList))

        updateStmt = update(Game).where(Game.gameId == currentGame).values(hand=winningHand)
        db.session.update(updateStmt)
        db.session.commit()
        

    #For each player give them one of the hands (current would be in order they joined)
    for user_obj in playerResult.scalars():
        if playerHands[handRotation] != None:
            updateStmt = update(PlayerState).where(PlayerState.gameId == currentGame).values(hand=playerHands[handRotation])
            db.session.update(updateStmt)
            db.session.commit()
            handRotation += 1

    resp = jsonify(weaponLayout=weaponLayout, success=True)
    resp.status_code = 200
    return resp

@game_blueprint.route('/game/cal_mvmnt')
def calc_mvmnt():
    return {"message": "test"}

@game_blueprint.route('/game/suggestion')
def ask_users_suggestion():
    return {"message": "test"}

@game_blueprint.route('/game/accusation')
def check_win():
    return {"message": "test"}