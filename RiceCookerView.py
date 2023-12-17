from ExceptionManager import ExceptionManager
from RiceCooker import RiceCooker
from Validation import Validation, get_valid_number_input


class RiceCookerView:
    scanner = None

    def __init__(self, service):
        self.service = service
        self.scanner = None

    def run(self):
        rice_cooker = RiceCooker()

        while True:
            self.display_main_menu()
            min_val = 1
            max_val = 4
            choice = int(
                get_valid_number_input(
                    self.menu_prompt_msg(min_val, max_val), min_val, max_val
                )
            )

            if Validation.is_cooking(rice_cooker) and choice == 1:
                continue

            if choice == 1:
                self.cook_food_menu(rice_cooker)
            elif choice == 2:
                self.service.steam_food()
            elif choice == 3:
                self.service.check_status(rice_cooker)
            elif choice == 4:
                self.service.shut_down()
                return
            else:
                print(ExceptionManager.error400_msg_integer_input(min_val, max_val))

    @staticmethod
    def menu_prompt_msg(min_val, max_val):
        return f"Enter your choice ({min_val} - {max_val}): "

    def display_main_menu(self):
        print()
        print("MAIN MENU:")
        print("1 - COOK FOOD")
        print("2 - STEAM FOOD")
        print("3 - CHECK STATUS")
        print("4 - SHUT DOWN")

    def cook_food_menu(self, rice_cooker):
        print()
        print("COOK FOOD MENU:")
        print("1- RICE")
        print("2- FOLLOW RECIPES")
        print("3- Return to MAIN MENU")

        min_val = 1
        max_val = 3
        choice = int(
            get_valid_number_input(
                self.menu_prompt_msg(min_val, max_val), min_val, max_val
            )
        )

        if choice == 1:
            self.service.cook_rice(rice_cooker)
        elif choice == 2:
            print(ExceptionManager.error501_msg())
        elif choice == 3:
            pass
        else:
            print(ExceptionManager.error400_msg_integer_input(min_val, max_val))
