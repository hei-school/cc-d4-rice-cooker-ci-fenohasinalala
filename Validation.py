from ExceptionManager import ExceptionManager
from RiceCooker import RiceCooker


class Validation:
    @staticmethod
    def is_cooking(rice_cooker):
        if rice_cooker.cook is not None:
            if rice_cooker.status == RiceCooker.Status.COOKING:
                print("Rice cooker still cooking ...")
                return True
        return False


def get_valid_number_input(prompt_msg, min_val=float("-inf"), max_val=float("inf")):
    while True:
        try:
            user_input = float(input(prompt_msg))
            if min_val <= user_input <= max_val:
                return user_input
            else:
                print("400: Input must be between", min_val, "and", max_val)
        except ValueError:
            print(ExceptionManager.error400_msg_number_input())
