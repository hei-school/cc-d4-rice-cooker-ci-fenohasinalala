const Validation = require("./Validation");
const RiceCooker = require("./RiceCooker");
const RiceCookerService = require("./RiceCookerService");

class RiceCookerView {
  static scanner;

  constructor(service) {
    this.service = service;
    RiceCookerView.scanner = require("readline-sync");
  }

  run() {
    const riceCooker = new RiceCooker();

    // eslint-disable-next-line no-constant-condition
    while (true) {
      this.displayMainMenu();
      const min = 1;
      const max = 4;
      const choice = parseInt(Validation.getValidNumberInputRange(min, max));
      if (Validation.isCooking(riceCooker) && choice === 1) {
        continue;
      }

      switch (choice) {
        case 1:
          this.cookFoodMenu(riceCooker);
          break;
        case 2:
          this.service.steamFood();
          break;
        case 3:
          this.service.checkStatus(riceCooker);
          break;
        case 4:
          this.service.shutDown();
          return;
        default:
          console.log(ExceptionManager.error400MsgIntegerInputRange(min, max));
      }
    }
  }

  menuPromptMsg(min, max) {
    return `Enter your choice (${min} - ${max}): `;
  }

  displayMainMenu() {
    console.log();
    console.log("MAIN MENU:");
    console.log("1 - COOK FOOD");
    console.log("2 - STEAM FOOD");
    console.log("3 - CHECK STATUS");
    console.log("4 - SHUT DOWN");
  }

  cookFoodMenu(riceCooker) {
    console.log();
    console.log("COOK FOOD MENU:");
    console.log("1- RICE");
    console.log("2- FOLLOW RECIPES");
    console.log("3- Return to MAIN MENU");

    const min = 1;
    const max = 3;
    const choice = parseInt(Validation.getValidNumberInputRange(min, max));

    switch (choice) {
      case 1:
        this.service.cookRice(riceCooker);
        break;
      case 2:
        console.log(ExceptionManager.error501Msg());
        break;
      case 3:
        break;
      default:
        console.log(ExceptionManager.error400MsgIntegerInputRange(min, max));
    }
  }
}

class ExceptionManager {
  static error400MsgIntegerInputRange(min, max) {
    return `400: Invalid choice. Please enter a valid option (${min} - ${max})`;
  }

  static error400MsgIntegerInput() {
    return "400: Invalid input. Please enter a valid number.";
  }

  static error501Msg() {
    return "501: Not implemented yet";
  }
}

class Main {
  static main() {
    const riceCookerView = new RiceCookerView(new RiceCookerService());
    riceCookerView.run();
  }
}

Main.main();
