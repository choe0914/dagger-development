# Put any utils functions in this file
import random
from sqlalchemy import select
from sqlalchemy import update
from sqlalchemy import and_
from dagger_development_api.utils import utils
from dagger_development_api.extensions import db
from dagger_development_api.model.game import Game
from dagger_development_api.model.player_state import PlayerState

winningHand = []

#Function for handling invalid movement
def invalid_mvmnt(ex):
    return

#Function for handling valid movement
def valid_mvmnt(ex):
    return

#Function for saving all the message processed through the server
def save_server_msgs(ex):
    return

#Function for broadcasting messages to all the users
def send_all_update(ex):
    return

#Function for sending a specific user the result of their request
def send_user_request(ex):
    return

#Function for handling an accusation
def check_server_hand(ex):
    return

#Function for asking users to refute a suggestion
def ask_user_sugg(ex):
    return

#Function for saving a game (if needed as a function)
def save_game(ex):
    return

#Function for loading a game (if needed as a function)
def load_game(ex):
    return

#Function used at the start of the game to deal hands
def start_game(currentGame):
    #Total cards is 21 - the winning 3 = 18
    totalCards = 18
    handRotation = 0                        

    #index the cards in an array to sort
    roomIndex = [1,3,5,9,11,13,17,19,21]
    cardIndex = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21]

    weaponRooms = []

    #Databse queries for the game we are working with and the player states in them
    gameStmt = select(Game).where(Game.gameId == currentGame)       
    gameResult = db.session.execute(gameStmt)
    playerStmt = select(PlayerState).where(PlayerState.gameId == currentGame)
    playerResult = db.session.execute(playerStmt)

    #For the game that we find then send the player list and calculate the hands
    for user_obj in gameResult.scalars():
        playerList = user_obj.players

        #playerHands = [[]  for x in range(len(playerList))]

        #Randomize the weapon starting rooms
        for x in range(6):                                      
            holdRoom = random.randint(0,8)
            weaponRooms.append(roomIndex[holdRoom])

        #randomize the winner first
        winningHand = [random.randint(0,5), random.randint(6,11), random.randint(12,20)]

        #remove selected cards
        cardIndex.pop(winningHand[2])
        cardIndex.pop(winningHand[1])
        cardIndex.pop(winningHand[0])

        #loop through all the cards
        while(totalCards > 0):
            for x in range(len(playerList)):
                #stop when there are none left
                if(totalCards == 0):

                    break

                #get a random card, add it to a hand, and remove it from the deck
                indexValue = random.randint(0,totalCards-1)
                cardPicked = cardIndex[indexValue]
                playerList[x].hand.append(cardPicked)
                cardIndex.pop(indexValue)
                totalCards -= 1

        updateStmt = update(Game).where(Game.gameId == currentGame).values(hand=winningHand)
        db.session.update(updateStmt)
        db.session.commit()

    #For each player give them one of the hands (current would be in order they joined)
    for user_obj in playerResult.scalars():
        if playerList[handRotation] != None:
            updateStmt = update(PlayerState).where(and_(PlayerState.gameId == currentGame, PlayerState.userId == playerList[handRotation].userId)).values(hand=playerList[handRotation])
            db.session.update(updateStmt)
            db.session.commit()
            handRotation += 1

    #return the room orientation    
    return(weaponRooms)