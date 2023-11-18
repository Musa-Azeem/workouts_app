from workout_app.extensions import db
from dataclasses import dataclass
from datetime import datetime

@dataclass
class Template(db.Model):
    name: str = db.Column(db.String(30), primary_key=True)
    category: str = db.Column(db.String(30), nullable=False)
    date_created: str = db.Column(db.DateTime, default=datetime.utcnow)

    # relation
    # user_id: int = db.Column(db.Integer)

@dataclass
class TemplateContains(db.Model):
    template_name: str = db.Column(db.String(30), primary_key=True)
    exercise_name: str = db.Column(db.String(30), primary_key=True)
    n_sets: int = db.Column(db.Integer)