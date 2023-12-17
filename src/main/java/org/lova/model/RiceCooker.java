package org.lova.model;

import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.util.UUID;

public class RiceCooker {
  private String id;
  private Status status;
  private Cook cook;

  public RiceCooker() {
    this.id = UUID.randomUUID().toString();
    this.status = Status.OFF;
    this.cook = null;
  }

  public void startCooking(String recipeName, String recipeDescription, Integer duration) {
    cook = new Cook(recipeName, recipeDescription, duration);
    status = Status.COOKING;
  }

  public void stopCooking() {
    cook = null;
    status = Status.OFF;
  }

  public void updateStatus(Instant currentDatetime) {
    if (cook != null) {
      Instant endDateTime = getEndDatetime(cook.getDebut(), cook.getDuration());

      if (endDateTime.isBefore(currentDatetime)) {
        status = Status.WARMING;
      }
    }
  }

  public void showStatus() {
    Instant now = Instant.now();
    updateStatus(now);
    System.out.println();
    System.out.println("Status: " + status);
    if (cook == null) {
      System.out.println("No cooking has been done");
    } else {
      if (status == Status.COOKING) {
        System.out.println("Recipe: " + cook.getRecipeName());
        System.out.println("Time remains: " + -getEndDatetime(cook.getDebut(), cook.getDuration()).until(now,
            ChronoUnit.MINUTES) + " MIN");
      } else if (status == Status.WARMING) {
        System.out.println("Cooking done!");
      }
    }
  }

  private Instant getEndDatetime(Instant debut, Integer duration) {
    long durationInSecond = duration * 60;
    return debut.plusSeconds(durationInSecond);
  }

  public static enum Status {
    OFF, COOKING, WARMING
  }

  public String getId() {
    return id;
  }

  public Status getStatus() {
    return status;
  }

  public Cook getCook() {
    return cook;
  }
}
