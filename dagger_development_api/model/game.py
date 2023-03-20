from dagger_development_api.extensions import db
from sqlalchemy.orm import relationship

# Game ORM
# Represents information on a single game, to include its name and winning hand
class Game(db.Model):
    # Id of the game
    gameId = db.Column(db.Integer, primary_key=True, autoincrement=True)
    # Which player is currently taking their turn
    curent_player_turn = db.Column(db.Integer, db.ForeignKey('player_state.playerStateId'))
    # Which cards are in the winning hand
    winningHand = relationship('GameCard', foreign_keys='GameCard.game_hand_id', back_populates=('gameHand'))
    # Which players (player states) are in the current game
    players = relationship('PlayerState', foreign_keys='PlayerState.gameId', backref=('game'))
    # Name of this game
    name = db.Column(db.String(20))

    def __init__(self, name):
        self.name = name
    
    def as_dict(self):
       return {c.name: getattr(self, c.name) for c in self.__table__.columns}