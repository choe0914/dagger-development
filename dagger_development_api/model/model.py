from dagger_development_api.extensions import db
from dagger_development_api.model.user import User

def init_data():
    # Create all the tables
    db.create_all()

    # Add any inital data that is needed (possibly none) then commit using the next line
    # db.session.commit()