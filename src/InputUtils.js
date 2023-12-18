class InputUtils {
  static menuPromptMsg() {
    return "Enter your choice: ";
  }

  static menuPromptMsgRange(min, max) {
    return `Select a value between ${min} - ${max}`;
  }
}

module.exports = InputUtils;
