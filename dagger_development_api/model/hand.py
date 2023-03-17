from dagger_development_api.extensions import db

# Hand ORM
class Hand(db.Model):
    handId = db.Column(db.Integer, primary_key=True)
    cardId = db.Column(db.Integer, primary_key=True)

    def __init__(self, card_id, hand_id):
        self.handId = hand_id
        self.cardId = card_id