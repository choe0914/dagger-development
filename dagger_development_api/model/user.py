from dagger_development_api.extensions import db

# User ORM
class User(db.Model):
    name = db.Column(db.String(20), primary_key=True)

    def __init__(self, name):
        self.name = name
