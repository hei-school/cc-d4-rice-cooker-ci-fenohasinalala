package org.lova.exception;

public class ExceptionManager {

  public static String error400MsgIntegerInput(double min, double max) {
    return "400: Invalid choice. Please enter a valid option (" + min + " - " + max + ")";
  }

  public static String error400MsgIntegerInput() {
    return "400: Invalid input. Please enter a valid number.";
  }

  public static String error501Msg() {
    return "501: Not implemented yet";
  }
}
