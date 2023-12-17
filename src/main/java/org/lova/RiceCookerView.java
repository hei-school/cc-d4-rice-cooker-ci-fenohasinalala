package org.lova;

import java.util.Scanner;
import org.lova.exception.ExceptionManager;
import org.lova.model.RiceCooker;
import org.lova.service.RiceCookerService;
import org.lova.utils.InputUtils;
import org.lova.validation.Validation;

public class RiceCookerView {
  public static Scanner scanner;
  private final RiceCookerService service;

  public RiceCookerView(RiceCookerService service) {
    this.service = service;
    scanner = new Scanner(System.in);
  }

  public void run() {

    RiceCooker riceCooker = new RiceCooker();

    while (true) {
      displayMainMenu();
      int min = 1;
      int max = 4;
      int choice = (int) Validation.getValidNumberInput(InputUtils.menuPromptMsg(min,max),min,max);
      if (Validation.isCooking(riceCooker) && (choice == 1)){
        continue;
      }
      switch (choice) {
        case 1:
          cookFoodMenu(riceCooker);
          break;
        case 2:
          service.steamFood();
          break;
        case 3:
          service.checkStatus(riceCooker);
          break;
        case 4:
          service.shutDown();
          return;
        default:
          System.out.println(ExceptionManager.error400MsgIntegerInput(min,max));
      }
    }
  }

  private void displayMainMenu() {
    System.out.println();
    System.out.println("MAIN MENU:");
    System.out.println("1 - COOK FOOD");
    System.out.println("2 - STEAM FOOD");
    System.out.println("3 - CHECK STATUS");
    System.out.println("4 - SHUT DOWN");
  }



  private void cookFoodMenu(RiceCooker riceCooker) {
    System.out.println();
    System.out.println("COOK FOOD MENU:");
    System.out.println("1- RICE");
    System.out.println("2- FOLLOW RECIPES");
    System.out.println("3- Return to MAIN MENU");

    int min = 1;
    int max = 3;
    double choice = Validation.getValidNumberInput(InputUtils.menuPromptMsg(min,max),min,max);

    switch ((int) choice) {
      case 1:
        service.cookRice(riceCooker);
        break;
      case 2:
        System.out.println(ExceptionManager.error501Msg());
        break;
      case 3:
        break;
      default:
        System.out.println(ExceptionManager.error400MsgIntegerInput(min,max));
    }
  }







}
