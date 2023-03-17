from dagger_development_api.extensions import db

# Game State ORM
class GameState(db.Model):
    gameId = db.Column(db.Integer, primary_key=True)
    winningHandId = db.Column(db.Integer)

    def __init__(self, game_id, winning_hand_id):
        self.winningHandId = winning_hand_id
        self.gameId = game_id