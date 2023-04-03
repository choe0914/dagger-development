from dagger_development_api.extensions import db
from sqlalchemy.orm import relationship

# Player State ORM
# Represents the current state of a user in a given game
class PlayerState(db.Model):
    playerStateId = db.Column(db.Integer, primary_key=True, autoincrement=True)

    #  GAME INFORMATION  #
    # The id of the character this player chose
    characterId = db.Column(db.Integer)
    # The players current board position in this game
    currentPosition = db.Column(db.Integer)
    # A list representing the cards a player has
    hand = relationship('GameCard', back_populates=('playerHand'), uselist=True)
    
    #  RELATIONSHIPS  #
    # Foreign key and relationship represented in the game object as the players in said game
    gameId = db.Column(db.Integer, db.ForeignKey('game.gameId'))
    # Foreign key and relationship represented in the user object as the players a user has
    userId = db.Column(db.Integer, db.ForeignKey('user.userId'))
    user = relationship("User", back_populates="playerStates")

    # A player's notepad
    notepadId = db.Column(db.Integer, db.ForeignKey('notepad.notepadId'))
    notepad = relationship("Notepad", backref="player", uselist=False)

    #  CONSTRAINTS  #
    # Unique Constraint to prevent multiple playerstates representing the same user in one game
    __table_args__ = (db.UniqueConstraint('userId', 'gameId', name='_user_game_uc'),)

    def __init__(self, user_id, game_id, character_id, current_position):
        self.userId = user_id
        self.gameId = game_id
        self.characterId = character_id
        self.currentPosition = current_position
    
    def as_dict(self):
        output = {c.name: getattr(self, c.name) for c in self.__table__.columns}
        if not self.notepad:
            output["notepad"] = {}
        else:
            output["notepad"] = self.notepad.as_dict()
        output["hand"] = list(map(lambda player: player.as_dict(), self.hand))
        return output