from dagger_development_api.extensions import db
from sqlalchemy.orm import relationship

# Game Card ORM.
# Effectively creates a deck for each game by creating a many to many relationship between
# the Game and CardInfo tables with a unique constraint on the gameId and cardId columns
class GameCard(db.Model):
    gameCardId = db.Column(db.Integer, primary_key=True, autoincrement=True)
    # The card info this represents 
    cardInfoId = db.Column(db.Integer, db.ForeignKey('card_info.cardInfoId'))
    cardInfo = relationship('CardInfo', foreign_keys='GameCard.cardInfoId', backref=('gameCard'))
    # The game this card belongs to
    gameId = db.Column(db.Integer, db.ForeignKey('game.gameId'))
    
    # Relationship between cards and the player or game holding them
    playerHand = relationship("PlayerState", back_populates="hand")
    gameHand = relationship("Game", foreign_keys='GameCard.game_hand_id', back_populates="winningHand")

    # The player's hand (or the game's winning hand) that this card is in
    game_hand_id = db.Column(db.Integer, db.ForeignKey('game.gameId'), nullable=True)
    player_hand_id = db.Column(db.Integer, db.ForeignKey('player_state.playerStateId'), nullable=True)

    # The current room for tokens, empty string represents no room
    currentRoom = db.Column(db.String(20))

    # Constraint that ensures that there are not duplicated cards in the game deck
    __table_args__ = (db.UniqueConstraint('cardInfoId', 'gameId', name='_user_game_uc'),)

    def __init__(self, card_id, game_id):
        self.cardInfoId = card_id
        self.gameId = game_id
    
    def as_dict(self):
       output = {c.name: getattr(self, c.name) for c in self.__table__.columns}
       output["cardInfo"] = self.cardInfo.as_dict()
       return output
