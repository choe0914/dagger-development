from dagger_development_api.extensions import db
from dagger_development_api.model.user import User
from dagger_development_api.model.game import Game
from dagger_development_api.model.game_card import GameCard
from dagger_development_api.model.player_state import PlayerState
from dagger_development_api.model.card_info import CardInfo
from dagger_development_api.model.notepad import Notepad

def init_data():
    # Create all the tables
    db.create_all()

    # Add any inital data that is needed (possibly none) then commit using the next line
    # Should include populating the cards here since they are static
    # db.session.commit()