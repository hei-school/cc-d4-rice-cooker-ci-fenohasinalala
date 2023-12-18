const InputUtils = require("./InputUtils");
const RiceCooker = require("./RiceCooker");
const prompt = require("prompt-sync")({ sigint: true });

class Validation {
  static isCooking(riceCooker) {
    if (
      riceCooker.cook !== null &&
      riceCooker.status === RiceCooker.Status.COOKING
    ) {
      console.log("Rice cooker still cooking ...");
      return true;
    }
    return false;
  }

  static isValidNumber(input) {
    const floatRegex = /^[-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?$/;
    return floatRegex.test(input);
  }

  static getValidNumberInput() {
    console.log(InputUtils.menuPromptMsg());
    let value = prompt();
    while (!this.isValidNumber(value)) {
      console.log("400: Invalid input. Please enter a valid number.");
      value = prompt();
    }
    return parseFloat(value);
  }

  static getValidNumberInputRange(min, max) {
    let input;
    console.log(InputUtils.menuPromptMsgRange(min, max));
    do {
      input = Validation.getValidNumberInput();

      if (input < min || input > max) {
        console.log(`400: Input must be between ${min} and ${max}.`);
      }
    } while (input < min || input > max);

    return input;
  }
}

module.exports = Validation;
