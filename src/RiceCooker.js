const { v4: uuidv4 } = require("uuid");
const Cook = require("./Cook");

class RiceCooker {
  static Status = {
    OFF: "OFF",
    COOKING: "COOKING",
    WARMING: "WARMING",
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
      const endDateTime = new Date(
        this.cook.debut.getTime() + this.cook.duration * 60 * 1000,
      );

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
        const endDatetime = this.getEndDatetime(
          this.cook.debut,
          this.cook.duration,
        );
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

module.exports = RiceCooker;
