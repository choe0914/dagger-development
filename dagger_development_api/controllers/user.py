from dagger_development_api.controllers import user_blueprint
from flask_cors import cross_origin
from dagger_development_api.extensions import db

# All routes for user data go here
@cross_origin(supports_credentials=True)
@user_blueprint.route('/user')
def example_user_route():
    return {"message": "test"}
    