from dagger_development_api.extensions import db

# Card ORM
class Card(db.Model):
    cardId = db.Column(db.Integer, primary_key=True)
    cardType = db.Column(db.Integer)
    name = db.Column(db.String(20))

    def __init__(self, card_id, name, card_type):
        self.cardId = card_id
        self.name = name
        self.cardType = card_type
