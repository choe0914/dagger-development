from extensions import db
from sqlalchemy.orm import relationship

# Notepad ORM
# Represents a players notepad
class Notepad(db.Model):
    # Id of the notepad
    notepadId = db.Column(db.Integer, primary_key=True, autoincrement=True)
    # The notes
    notes = db.Column(db.String)

    def __init__(self, notes):
        self.notes = notes
    
    def as_dict(self):
       return {c.name: getattr(self, c.name) for c in self.__table__.columns}