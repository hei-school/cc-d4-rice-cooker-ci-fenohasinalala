from datetime import datetime
import uuid


class Cook:
    def __init__(self, recipe_name, description, duration):
        self.id = str(uuid.uuid4())
        self.description = description
        self.debut = datetime.now()
        self.recipe_name = recipe_name
        self.duration = duration
