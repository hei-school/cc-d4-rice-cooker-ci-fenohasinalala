from RiceCooker import RiceCooker


class Validation:
    @staticmethod
    def is_cooking(rice_cooker):
        if (
            rice_cooker.cook is not None
            and rice_cooker.status == RiceCooker.Status.COOKING
        ):
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
            print("400: Invalid input. Please enter a valid number.")
