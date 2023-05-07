from flask import Flask
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from config import Config
from model import model
import os 

os.system("python")
dir_path = os.path.dirname(os.path.realpath(__file__))

def create_app(config_class=Config):
    app = Flask(__name__)
    CORS(app, origins=["*"], supports_credentials=True)
    app.config.from_object(config_class)

    # Init the Database and fill with data if necessary
    from extensions import db
    db.init_app(app)
    with app.app_context():
        # if not os.path.isfile(dir_path + "..\..\instance\clue_database.db"):
        model.init_data()
    
        # Register blueprints
        from controllers import user_blueprint
        # from controllers import game_blueprint
        # from controllers import player_blueprint

        app.register_blueprint(user_blueprint)
        # app.register_blueprint(game_blueprint)
        # app.register_blueprint(player_blueprint)
        
    return app
