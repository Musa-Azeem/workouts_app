from flask import Flask
from config import Config
from workout_app.extensions import db
from workout_app.workouts import blueprint as workouts_bp
from flask_cors import CORS, cross_origin

def create_app(config_class=Config):
    app = Flask(__name__)
    app.config.from_object(config_class)

    # Enable Cross Origin
    cors = CORS(app)
    app.config['CORS_HEADERS'] = 'Content-Type'

    # Initialize Flask extensions
    db.init_app(app)

    # Register blueprints
    app.register_blueprint(workouts_bp)

    return app