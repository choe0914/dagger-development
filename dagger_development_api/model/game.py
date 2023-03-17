from dagger_development_api.extensions import db

# Game ORM
class Game(db.Model):
    gameId = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(20))

    def __init__(self, game_id, name):
        self.name = name
        self.gameId = game_id