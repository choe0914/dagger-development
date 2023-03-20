from dagger_development_api.controllers import user_blueprint
from flask_cors import cross_origin
from dagger_development_api.extensions import db

# All routes for user data (if needed)
@cross_origin(supports_credentials=True)
@user_blueprint.route('/user')

@user_blueprint('/save_user')
def save_user_todb():
    return {"message": "test"}

@user_blueprint('/load_user')
def load_user_fromdb():
    return {"message": "test"}

@user_blueprint('/get_hand')
def send_msg_user():
    return {"message": "test"}

@user_blueprint('/set_character')
def send_msq_everyone():
    return {"message": "test"}  