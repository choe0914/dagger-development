from dagger_development_api.extensions import db

# Game ORM
class PlayerState(db.Model):
    userId = db.Column(db.Integer, primary_key=True)
    gameId = db.Column(db.Integer, primary_key=True)
    characterId = db.Column(db.Integer)
    handId = db.Column(db.Integer)
    currentPosition = db.Column(db.Integer)

    def __init__(self, user_id, game_id, character_id, hand_id, current_position):
        self.userId = name
        self.gameId = game_id
        self.characterId = character_id
        self.handId = hand_id
        self.currentPosition = current_position