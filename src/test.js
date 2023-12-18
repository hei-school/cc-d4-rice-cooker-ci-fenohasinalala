/* eslint-disable no-unused-expressions */
const { expect } = require("chai");
const Validation = require("./Validation");

describe("Validation", () => {
  describe("isValidNumber", () => {
    it("should return true for a valid number", () => {
      const result = Validation.isValidNumber("123.45");
      expect(result).to.be.true;
    });

    it("should return true for a valid number with scientific notation", () => {
      const result = Validation.isValidNumber("1.23e-4");
      expect(result).to.be.true;
    });

    it("should return false for an invalid number, empty string, null, and undefined input", () => {
      // Test invalid number
      let result = Validation.isValidNumber("invalid");
      expect(result).to.be.false;

      // Test empty string
      result = Validation.isValidNumber("");
      expect(result).to.be.false;

      // Test null input
      result = Validation.isValidNumber(null);
      expect(result).to.be.false;

      // Test undefined input
      result = Validation.isValidNumber(undefined);
      expect(result).to.be.false;
    });
  });
});
