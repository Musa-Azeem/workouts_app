from workout_app.extensions import db
from dataclasses import dataclass
from datetime import datetime

@dataclass
class Workout(db.Model):
    id: int = db.Column(db.Integer, primary_key=True, autoincrement=True)
    date_created: str = db.Column(db.DateTime, default=datetime.utcnow)

    # relation
    # user_id: int = db.Column(db.Integer)
    template_name: str = db.Column(db.String(30))