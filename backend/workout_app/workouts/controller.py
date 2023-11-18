from workout_app.extensions import db
from workout_app.models import Exercise, WorkoutSet, Template, Workout

def get_all_workouts_controller() -> tuple[dict, int]:
    workouts = Workout.query.all()
    return workouts, 200

def create_workout_controller(req) -> tuple[dict, int]:
    content_type = req.headers.get('Content-Type')
    if (content_type != 'application/json'):
        return 'Content-Type not supported', 400 # Bad request

    workout = req.json

    empty_fields = [] # track any missing fields
    for field in ['template_name']:
        if not field in workout:
            empty_fields.append(field)
    
    if len(empty_fields) > 0:
        return dict(
            error='Please fill in all fields',
            empty_fields=empty_fields
        ), 400
    
    workout_row = Workout(
        # user_id=workout['user_id'],
        template_name=workout['template_name']
    )
    db.session.add(workout_row)
    db.session.commit()

    return [workout_row], 200

def get_all_exercises_controller() -> tuple[dict, int]:
    return Exercise.query.all(), 200

def create_exercise_controller(req) -> tuple[dict, int]:
    content_type = req.headers.get('Content-Type')
    if (content_type != 'application/json'):
        return 'Content-Type not supported', 400 # Bad request

    exercise = req.json

    empty_fields = [] # track any missing fields
    for field in ['name']:
        if not field in exercise:
            empty_fields.append(field)
    
    if len(empty_fields) > 0:
        return dict(
            error='Please fill in all fields',
            empty_fields=empty_fields
        ), 400
    
    exercise_row = Exercise(
        # user_id=workout['user_id'],
        name=exercise['name']
    )
    db.session.add(exercise_row)
    db.session.commit()

    return [exercise_row], 200


def get_sets_controller(exercise_name) -> tuple[dict, int]:

    if not Exercise.query.filter_by(name=exercise_name).first():
        return dict(
            error="Provided Exercise name does not exist"
        ), 400

    return WorkoutSet.query.filter_by(exercise_name=exercise_name) \
        .order_by(WorkoutSet.date_created.desc()).all(), 200

def create_set_controller(req) -> tuple[dict, int]:
    content_type = req.headers.get('Content-Type')
    if (content_type != 'application/json'):
        return 'Content-Type not supported', 400 # Bad request

    workout_set = req.json

    empty_fields = [] # track any missing fields
    for field in ['workout_id', 'index', 'exercise_name', 'weight', 'n_reps']:
        print(workout_set.get('workout_id'))
        if not field in workout_set:
            print(field)
            empty_fields.append(field)
    
    if len(empty_fields) > 0:
        return dict(
            error='Please fill in all fields',
            empty_fields=empty_fields
        ), 400
    
    workout_set_row = WorkoutSet(
        # user_id=workout['user_id'],
        workout_id=workout_set['workout_id'],
        index=workout_set['index'],
        exercise_name=workout_set['exercise_name'],
        weight=workout_set['weight'],
        n_reps=workout_set['n_reps']
    )
    db.session.add(workout_set_row)
    db.session.commit()

    return [workout_set_row], 200