const { v4: uuidv4 } = require("uuid");

class Cook {
  constructor(recipeName, description, duration) {
    this.id = uuidv4();
    this.description = description;
    this.debut = new Date();
    this.recipeName = recipeName;
    this.duration = duration;
  }
}

module.exports = Cook;
