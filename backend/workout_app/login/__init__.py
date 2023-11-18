from flask import Blueprint

blueprint = Blueprint('login', __name__)

from workout_app.login import routes