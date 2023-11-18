from workout_app.workouts import blueprint
from workout_app.workouts.controller import (
    get_all_workouts_controller,
    create_workout_controller,
    get_all_exercises_controller,
    create_exercise_controller,
    get_sets_controller,
    create_set_controller
)
from flask import request

@blueprint.route('/get_all_workouts', methods=['GET'])
def get_all_workouts():
    return get_all_workouts_controller()

@blueprint.route('/create_workout', methods=['POST'])
def create_workout():
    return create_workout_controller(request)

@blueprint.route('/get_all_exercises', methods=['GET'])
def get_all_exercises():
    return get_all_exercises_controller()

@blueprint.route('/create_exercise', methods=['POST'])
def create_exercise():
    return create_exercise_controller(request)

@blueprint.route('/get_sets/<exercise_name>', methods=['GET'])
def get_all_sets(exercise_name):
    return get_sets_controller(exercise_name)

@blueprint.route('/create_set', methods=['POST'])
def create_set():
    return create_set_controller(request)