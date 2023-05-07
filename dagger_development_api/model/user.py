from extensions import db
from sqlalchemy.orm import relationship

# User ORM
# Represents a single user
class User(db.Model):
    # Name of the user
    name = db.Column(db.String(20))
    # Id of the user
    userId = db.Column(db.Integer, primary_key=True, autoincrement=True)
    # The players this user has
    playerStates = relationship("PlayerState", back_populates="user")
    # Unique Constraint to prevent multiple users with the same username
    __table_args__ = (db.UniqueConstraint('name', name='_user_name_uc'),)

    def __init__(self, name):
        self.name = name
    
    def as_dict(self):
       output = {c.name: getattr(self, c.name) for c in self.__table__.columns}
       output["playerStates"] = list(map(lambda player: player.as_dict(), self.playerStates))
       return output