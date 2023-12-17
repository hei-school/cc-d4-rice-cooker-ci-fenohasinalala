const { v4: uuidv4 } = require('uuid');

const prompt = require("prompt-sync")({sigint:true});


class Cook {
  constructor(recipeName, description, duration) {
    this.id = uuidv4();
    this.description = description;
    this.debut = new Date();
    this.recipeName = recipeName;
    this.duration = duration;
  }
}

class RiceCooker {
  static Status = {
    OFF: "OFF",
    COOKING: "COOKING",
    WARMING: "WARMING"
  };

  constructor() {
    this.id = uuidv4();
    this.status = RiceCooker.Status.OFF;
    this.cook = null;
  }

  startCooking(recipeName, recipeDescription, duration) {
    this.cook = new Cook(recipeName, recipeDescription, duration);
    this.status = RiceCooker.Status.COOKING;
  }

  stopCooking() {
    this.cook = null;
    this.status = RiceCooker.Status.OFF;
  }

  updateStatus() {
    if (this.cook !== null) {
      const endDateTime = new Date(this.cook.debut.getTime() + this.cook.duration * 60 * 1000);

      if (endDateTime < new Date()) {
        this.status = RiceCooker.Status.WARMING;
      }
    }
  }

  showStatus() {
    this.updateStatus();
    const now = new Date();
    console.log();
    console.log("Status:", this.status);

    if (this.cook === null) {
      console.log("No cooking has been done");
    } else {
      if (this.status === RiceCooker.Status.COOKING) {
        const endDatetime = this.getEndDatetime(this.cook.debut, this.cook.duration)
        const timeRemaining = Math.floor((endDatetime - now) / (60 * 1000));
        console.log("Recipe:", this.cook.recipeName);
        console.log("Time remains:", timeRemaining, "MIN");
      } else if (this.status === RiceCooker.Status.WARMING) {
        console.log("Cooking done!");
      } else {
        console.log("No cooking has been done");
      }
    }
  }

  getEndDatetime(debut, duration) {
    const durationInSeconds = duration * 60;
    return new Date(debut.getTime() + durationInSeconds * 1000);
  }
}

class InputUtils {
  static menuPromptMsg() {
    return "Enter your choice: ";
  }

  static menuPromptMsgRange(min, max) {
    return `Select a value between ${min} - ${max}`;
  }
}

class Validation {
  static isCooking(riceCooker) {
    if (riceCooker.cook !== null && riceCooker.status === RiceCooker.Status.COOKING) {
      console.log("Rice cooker still cooking ...");
      return true;
    }
    return false;
  }

  static getValidNumberInput() {
    console.log(InputUtils.menuPromptMsg());
    const value = prompt()
    while (isNaN(parseFloat(value)) || !isFinite(value)) {
      console.log("400: Invalid input. Please enter a valid number.");
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

class RiceCookerService {
  cookRice(riceCooker) {
    const min = 2;
    const max = 8;
    const riceCupsPrompt = `Enter the number of rice cups you want to cook (${min} - ${max}): `;
    console.log(riceCupsPrompt);
    const riceCups = Validation.getValidNumberInputRange(min, max);
    const minWater = riceCups;
    const maxWater = riceCups + 0.5;
    const waterCupsPrompt = `Enter the number of water cups, for ${riceCups} rice cups put ${minWater} to ${maxWater} cups of water: `;
    console.log(waterCupsPrompt);
    const waterCups = Validation.getValidNumberInputRange(minWater, maxWater);

    // Display confirmation message
    console.log("List of ingredients");
    const ingredient1 = `Rice cups\t\tx ${riceCups}`;
    const ingredient2 = `Water cups\t\tx ${waterCups}`;
    console.log(ingredient1);
    console.log(ingredient2);

    console.log("To proceed with cooking, please confirm (yes/no): ");
    const confirmation = prompt();

    if (confirmation.toLowerCase() === "yes") {
      const recipeName = "Just Rice";
      const description = `${ingredient1}\n${ingredient2}`;
      const duration = 15;
      riceCooker.startCooking(recipeName, description, duration);
      console.log("Cooking started. Go to CHECK STATUS to check the remaining cooking time.");
    } else {
      console.log("Cooking canceled. Returning to MAIN MENU.");
    }
  }

  checkStatus(riceCooker) {
    riceCooker.showStatus();
  }

  steamFood() {
    console.log("501: Not implemented yet");
  }

  shutDown() {
    console.log("Shutting down...");
  }
}

class RiceCookerView {
  static scanner;

  constructor(service) {
    this.service = service;
    RiceCookerView.scanner = require('readline-sync');
  }

  run() {
    const riceCooker = new RiceCooker();

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
          console.log(ExceptionManager.error400MsgIntegerInput(min, max));
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
        console.log(ExceptionManager.error400MsgIntegerInput(min, max));
    }
  }
}

class ExceptionManager {
  static error400MsgIntegerInput(min, max) {
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
