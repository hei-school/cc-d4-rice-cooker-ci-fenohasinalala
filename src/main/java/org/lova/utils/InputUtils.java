package org.lova.utils;

public class InputUtils {
  public static String menuPromptMsg() {
    return "Enter your choice: ";
  }

  public static String menuPromptMsg(double min, double max) {
    return "Select value between " + min + " - " + max;
  }
}
