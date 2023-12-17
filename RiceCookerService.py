from Validation import get_valid_number_input


class RiceCookerService:
    def cook_rice(self, rice_cooker):
        cooking_rice_time = 15  # minutes
        min_val = 2
        max_val = 8
        rice_cups = get_valid_number_input(
            f"Enter the number of rice cups you want to cook ({min_val} - {max_val}): ",
            min_val,
            max_val,
        )
        water_cups_prompt = f"Enter the number of water cups, for {rice_cups} rice cups put {rice_cups} to {rice_cups+0.5} cups of water: "
        water_cups = get_valid_number_input(
            water_cups_prompt, rice_cups, rice_cups + 0.5
        )
        confirmation = input("To proceed with cooking, please confirm (yes/no): ")
        if confirmation.lower() == "yes":
            rice_cooker.start_cooking(
                "Just Rice",
                f"Rice cups\t\tx {rice_cups}\nWater cups\t\tx {water_cups}",
                cooking_rice_time,
            )
            print("Cooking started...")
        else:
            print("Cooking canceled. Returning to MAIN MENU.")

    def check_status(self, rice_cooker):
        rice_cooker.show_status()

    def steam_food(self):
        # TODO: Implement steam food
        print("501: Not implemented yet")

    def shut_down(self):
        # TODO: Implement shut down
        print("Shutting down...")
