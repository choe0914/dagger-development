from flask import Blueprint

# Create blueprints to group routes by functionality
user_blueprint = Blueprint('user_blueprint', __name__)

from dagger_development_api.controllers import user