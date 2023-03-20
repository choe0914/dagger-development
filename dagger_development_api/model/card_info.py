from dagger_development_api.extensions import db

# CardInfo ORM
# Stores information about a card such as type and name
class CardInfo(db.Model):
    # ID of the cardinfo object
    cardInfoId = db.Column(db.Integer, primary_key=True, autoincrement=True)
    # Type of card
    cardType = db.Column(db.Integer)
    # Name of card
    name = db.Column(db.String(20))

    def __init__(self, name, card_type):
        self.name = name
        self.cardType = card_type
    
    def as_dict(self):
       return {c.name: getattr(self, c.name) for c in self.__table__.columns}
