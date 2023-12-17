package org.lova.validation;

import static org.lova.RiceCookerView.scanner;
import static org.lova.utils.InputUtils.menuPromptMsg;

import org.lova.exception.ExceptionManager;
import org.lova.model.RiceCooker;
import org.lova.model.RiceCooker.Status;

public class Validation {

  public static boolean isCooking(RiceCooker riceCooker){
    if (riceCooker.getCook() !=null && riceCooker.getStatus() == Status.COOKING){
      System.out.println("Rice cooker still cooking ...");
      return true;
    }
    return false;
  }


  public static double getValidNumberInput() {
    System.out.println(menuPromptMsg());
    while (!scanner.hasNextDouble()) {
      System.out.println(ExceptionManager.error400MsgIntegerInput());
      scanner.next();
    }
    return scanner.nextDouble();
  }

  public static double getValidNumberInput(String promptMsg, double min, double max) {
    double input;
    System.out.println(promptMsg);
    do {
      input = getValidNumberInput();

      if (input < min || input > max) {
        System.out.println(ExceptionManager.error400MsgIntegerInput(min,max));
      }

    } while (input < min || input > max);

    return input;
  }
}
