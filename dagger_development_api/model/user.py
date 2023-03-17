from dagger_development_api.extensions import db

# User ORM
class User(db.Model):
    name = db.Column(db.String(20))
    userId = db.Column(db.Integer, primary_key=True)

    def __init__(self, name, user_id):
        self.name = name
        self.userId = user_id