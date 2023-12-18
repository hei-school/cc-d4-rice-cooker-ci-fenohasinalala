package org.lova;

import org.lova.service.RiceCookerService;

public class Main {

  public static void main(String[] args) {
    RiceCookerView riceCookerView = new RiceCookerView(new RiceCookerService());
    riceCookerView.run();
  }
}
