class ExceptionManager:
    @staticmethod
    def error400_msg_integer_input(min_val=float("-inf"), max_val=float("inf")):
        return (
            f"400: Invalid choice. Please enter a valid option ({min_val} - {max_val})"
        )

    @staticmethod
    def error400_msg_integer_input():
        return "400: Invalid input. Please enter a valid number."

    @staticmethod
    def error501_msg():
        return "501: Not implemented yet"
