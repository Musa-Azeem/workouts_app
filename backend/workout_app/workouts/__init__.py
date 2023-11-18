from flask import Blueprint

blueprint = Blueprint('workouts', __name__)

from workout_app.workouts import routes