package org.lova.service;

import static org.lova.RiceCookerView.scanner;

import org.lova.exception.ExceptionManager;
import org.lova.model.RiceCooker;
import org.lova.validation.Validation;

public class RiceCookerService {
  public void cookRice(RiceCooker riceCooker) {
    int min = 2;
    int max = 8;
    String riceCupsPrompt = "Enter the number of rice cups you want to cook ("+min+" - "+max+"): ";
    double riceCups = Validation.getValidNumberInput(riceCupsPrompt,min,max);
    double minWater = riceCups;
    double maxWater = riceCups+0.5;
    String waterCupsPrompt = "Enter the number of water cups, for "+riceCups+" rice cups put "+minWater+" to "+maxWater+" cups of water: ";
    double waterCups = Validation.getValidNumberInput(waterCupsPrompt,minWater,maxWater);

    // Display confirmation message
    System.out.println("List of ingredients");
    String ingredient1 = "Rice cups\t\tx "+riceCups;
    String ingredient2 = "Water cups\t\tx "+waterCups;
    System.out.println(ingredient1);
    System.out.println(ingredient2);

    System.out.print("To proceed with cooking, please confirm (yes/no): ");
    String confirmation = scanner.next();

    if ("yes".equalsIgnoreCase(confirmation)) {
      String recipeName = "Just Rice";
      String description = ingredient1+"\n"+ingredient2;
      Integer duration = 15;
      riceCooker.startCooking(recipeName,description,duration);
      System.out.println("Cooking started. Go to CHECK STATUS to check the remaining cooking time.");
    } else {
      System.out.println("Cooking canceled. Returning to MAIN MENU.");
    }
  }


  public void checkStatus(RiceCooker riceCooker) {
    riceCooker.showStatus();
  }

  public void steamFood() {
    // TODO: Implement of steamFood
    System.out.println(ExceptionManager.error501Msg());
  }

  public void shutDown() {
    // TODO: Implement of shutDown
    System.out.println("Shutting down...");
  }
}
