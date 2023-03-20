from flask import Flask
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from dagger_development_api.config import Config
from dagger_development_api.model import model
import os 

dir_path = os.path.dirname(os.path.realpath(__file__))

def create_app(config_class=Config):
    app = Flask(__name__)
    app.config.from_object(config_class)

    # Init the Database and fill with data if necessary
    from dagger_development_api.extensions import db
    db.init_app(app)
    with app.app_context():
        if not os.path.isfile(dir_path + "\..\instance\clue_database.db"):
            model.init_data()
    
    # Register blueprints
    from dagger_development_api.controllers import user_blueprint
    from dagger_development_api.controllers import game_blueprint
    app.register_blueprint(user_blueprint)
    app.register_blueprint(game_blueprint)
    return app
