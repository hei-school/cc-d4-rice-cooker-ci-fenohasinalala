from Validation import get_valid_number_input


class RiceCookerService:
    def cook_rice(self, rice_cooker):
        cooking_rice_time = 15  # minutes
        min_val = 2
        max_val = 8
        rice_cups_prompt = (
            f"Enter the number of rice cups you want to cook ({min_val} - {max_val}): "
        )
        rice_cups = get_valid_number_input(rice_cups_prompt, min_val, max_val)
        min_water = rice_cups
        max_water = rice_cups + 0.5
        water_cups_prompt = f"Enter the number of water cups, for {rice_cups} rice cups put {min_water} to {max_water} cups of water: "
        water_cups = get_valid_number_input(water_cups_prompt, min_water, max_water)

        # Display confirmation message
        print("List of ingredients")
        ingredient1 = f"Rice cups\t\tx {rice_cups}"
        ingredient2 = f"Water cups\t\tx {water_cups}"
        print(ingredient1)
        print(ingredient2)

        confirmation = input("To proceed with cooking, please confirm (yes/no): ")

        if confirmation.lower() == "yes":
            recipe_name = "Just Rice"
            description = f"{ingredient1}\n{ingredient2}"
            duration = cooking_rice_time
            rice_cooker.start_cooking(recipe_name, description, duration)
            print(
                "Cooking started. Go to CHECK STATUS to check the remaining cooking time."
            )
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
