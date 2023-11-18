from workout_app.extensions import db
from dataclasses import dataclass
from datetime import datetime

@dataclass
class WorkoutSet(db.Model):
    index: int = db.Column(db.Integer, primary_key=True)
    weight: float = db.Column(db.Float, nullable=False)
    n_reps: int = db.Column(db.Integer, nullable=False)
    date_created: str = db.Column(db.DateTime, default=datetime.utcnow)

    # relation
    workout_id: int = db.Column(db.Integer, primary_key=True)
    exercise_name: str = db.Column(db.String(30), nullable=False, primary_key=True)