from datetime import datetime, timedelta
from Cook import Cook
import uuid


class RiceCooker:
    class Status:
        OFF = "OFF"
        COOKING = "COOKING"
        WARMING = "WARMING"

    def __init__(self):
        self.id = str(uuid.uuid4())
        self.status = self.Status.OFF
        self.cook = None

    def start_cooking(self, recipe_name, recipe_description, duration):
        self.cook = Cook(recipe_name, recipe_description, duration)
        self.status = self.Status.COOKING

    def stop_cooking(self):
        self.cook = None
        self.status = self.Status.OFF

    def update_status(self):
        if self.cook is not None:
            end_datetime = self.cook.debut + timedelta(minutes=self.cook.duration)

            if end_datetime < datetime.now():
                self.status = self.Status.WARMING

    def show_status(self):
        self.update_status()
        now = datetime.now()
        print()
        print("Status:", self.status)

        if self.cook is None:
            print("No cooking has been done")
        else:
            if self.status == self.Status.COOKING:
                time_remaining = (
                    self.cook.debut + timedelta(minutes=self.cook.duration) - now
                ).seconds // 60
                print("Recipe:", self.cook.recipe_name)
                print("Time remains:", time_remaining, "MIN")
            elif self.status == self.Status.WARMING:
                print("Cooking done!")
