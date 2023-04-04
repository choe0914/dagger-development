from dagger_development_api import create_app
from flask_socketio import SocketIO
if __name__ == '__main__':
    app = create_app()
    socketio = SocketIO(app)
    socketio.run(app)
