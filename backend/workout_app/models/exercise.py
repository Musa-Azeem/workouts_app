from workout_app.extensions import db
from dataclasses import dataclass
from datetime import datetime

@dataclass
class Exercise(db.Model):
    name: str = db.Column(db.String(30), primary_key=True)
    date_created: str = db.Column(db.DateTime, default=datetime.utcnow)

    # relation
    # user_id: int = db.Column(db.Integer)
