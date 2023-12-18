const prompt = require("prompt-sync")({ sigint: true });
const Validation = require("./Validation");

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
      console.log(
        "Cooking started. Go to CHECK STATUS to check the remaining cooking time.",
      );
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

module.exports = RiceCookerService;
