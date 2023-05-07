import __init__
from flask_socketio import SocketIO

app = __init__.create_app()
socketio = SocketIO(app, cors_allowed_origins="*")

if __name__ == '__main__':
    socketio.run(app)