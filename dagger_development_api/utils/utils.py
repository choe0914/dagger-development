# Put any utils functions in this file
import random

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
def start_game(totalPlayers):
    totalCards = 18                                      #Total cards is 21 - the winning 3 = 18                         

    roomIndex = [1,3,5,9,11,13,17,19,21]
    cardIndex = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21]         #index the cards in an array to sort

    weaponRooms = []
    playerHands = [[]  for x in range(totalPlayers)]        #Create the empty player hands

    for x in range(6):                                      #randomize the rooms
        holdRoom = random.randint(0,8)
        weaponRooms.append(roomIndex[holdRoom])
        
    winningHand = [random.randint(0,5), random.randint(6,11), random.randint(12,20)]    #randomize the winner first

    cardIndex.pop(winningHand[2])       #remove selected cards
    cardIndex.pop(winningHand[1])
    cardIndex.pop(winningHand[0])

    while(totalCards > 0):              #loop through all the cards
        for x in range(len(playerHands)):
            if(totalCards == 0):        #stop when there are none left

                break
            indexValue = random.randint(0,totalCards-1)     #get a random card, add it to a hand, and remove it from the deck
            cardPicked = cardIndex[indexValue]
            playerHands[x].append(cardPicked)
            cardIndex.pop(indexValue)
            totalCards -= 1
        
    return(winningHand, playerHands, weaponRooms)    #return the winning hand, player hands, and room orientation