from flask import Blueprint
from flask_cors import CORS

# Create blueprints to group routes by functionality
user_blueprint = Blueprint('user_blueprint', __name__)
game_blueprint = Blueprint('game_blueprint', __name__)
player_blueprint = Blueprint('player_blueprint', __name__)

CORS(user_blueprint, origins=["*"])
CORS(game_blueprint, origins=["*"])
CORS(player_blueprint, origins=["*"])

from controllers import user
from controllers import game
from controllers import player
from controllers import events