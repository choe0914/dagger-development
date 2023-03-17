from dagger_development_api.extensions import db
from dagger_development_api.model.user import User
from dagger_development_api.model.hand import Hand
from dagger_development_api.model.game import Game
from dagger_development_api.model.game_state import GameState
from dagger_development_api.model.player_state import PlayerState
from dagger_development_api.model.card import Card

def init_data():
    # Create all the tables
    db.create_all()

    # Add any inital data that is needed (possibly none) then commit using the next line
    # Should include populating the cards here since they are static
    # db.session.commit()