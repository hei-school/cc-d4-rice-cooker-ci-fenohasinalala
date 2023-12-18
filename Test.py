import unittest
from unittest.mock import patch
from Validation import Validation, get_valid_number_input
from RiceCooker import RiceCooker

class TestValidation(unittest.TestCase):

    def test_is_cooking_true(self):
        rice_cooker = RiceCooker()
        rice_cooker.start_cooking("Test Recipe", "Test Description", 30)
        with patch("builtins.print") as mock_print:
            result = Validation.is_cooking(rice_cooker)
            self.assertTrue(result)
            mock_print.assert_called_with("Rice cooker still cooking ...")

    def test_is_cooking_false(self):
        rice_cooker = RiceCooker()
        with patch("builtins.print") as mock_print:
            result = Validation.is_cooking(rice_cooker)
            self.assertFalse(result)
            mock_print.assert_not_called()

    @patch("builtins.input", side_effect=["abc", "5"])
    def test_get_valid_number_input(self, mock_input):
        prompt_msg = "Enter a number: "
        min_val = 2
        max_val = 8
        result = get_valid_number_input(prompt_msg, min_val, max_val)
        self.assertEqual(result, 5)

    @patch("builtins.input", side_effect=["invalid", "3"])
    @patch("builtins.print")
    def test_get_valid_number_input_with_invalid_input(self, mock_print, mock_input):
        prompt_msg = "Enter a number: "
        min_val = 2
        max_val = 8
        result = get_valid_number_input(prompt_msg, min_val, max_val)
        mock_print.assert_called_with("400: Invalid input. Please enter a valid number.")
        self.assertEqual(result, 3)

if __name__ == '__main__':
    unittest.main()
