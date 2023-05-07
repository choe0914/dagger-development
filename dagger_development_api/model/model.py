
from utils.constants import CARD_TYPES, SUSPECTS, WEAPONS, ROOMS

def init_data():
    # Create all the tables
    from extensions import db
    from model.user import User
    from model.game import Game
    from model.game_card import GameCard
    from model.player_state import PlayerState
    from model.card_info import CardInfo
    from model.notepad import Notepad
    db.create_all()
    if not db.session.query(CardInfo).first():
        for key, suspect_name in SUSPECTS.items():
            db.session.add(CardInfo(suspect_name, CARD_TYPES.SUSPECT))

        for key, weapon_name in WEAPONS.items():
            db.session.add(CardInfo(weapon_name, CARD_TYPES.WEAPON))
            db.session.add(CardInfo(weapon_name, CARD_TYPES.TOKEN))
        
        for key, room_name in ROOMS.items():
            db.session.add(CardInfo(room_name, CARD_TYPES.ROOM)) 

        db.session.commit()