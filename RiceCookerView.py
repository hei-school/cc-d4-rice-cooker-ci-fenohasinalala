from ExceptionManager import ExceptionManager
from RiceCooker import RiceCooker
from Validation import Validation, get_valid_number_input


class RiceCookerView:
    MAIN_MENU = (
        "",
        "MAIN MENU:",
        "1 - COOK FOOD",
        "2 - STEAM FOOD",
        "3 - CHECK STATUS",
        "4 - SHUT DOWN",
    )

    COOK_FOOD_MENU = (
        "",
        "COOK FOOD MENU:",
        "1 - RICE",
        "2 - FOLLOW RECIPES",
        "3 - Return to MAIN MENU",
    )

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
            match choice:
                case 1:
                    self.cook_food_menu(rice_cooker)
                case 2:
                    self.service.steam_food()
                case 3:
                    self.service.check_status(rice_cooker)
                case 4:
                    self.service.shut_down()
                    return
                case _:
                    print(ExceptionManager.error400_msg_integer_input(min_val, max_val))

    @staticmethod
    def menu_prompt_msg(min_val, max_val):
        return f"Enter your choice ({min_val} - {max_val}): "

    def display_main_menu(self):
        print(*self.MAIN_MENU, sep="\n")

    def cook_food_menu(self, rice_cooker):
        print(*self.COOK_FOOD_MENU, sep="\n")
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
