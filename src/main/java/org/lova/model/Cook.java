package org.lova.model;

import java.time.Instant;
import java.util.UUID;

public class Cook {
  private String id;
  private String recipeName;
  private Instant debut;
  private Integer duration;
  private String description;

  public Cook(String recipeName, String description, Integer duration) {
    this.id = UUID.randomUUID().toString();
    this.description = description;
    this.debut = Instant.now();
    this.recipeName = recipeName;
    this.duration = duration;
  }

  public Instant getDebut() {
    return debut;
  }

  public String getRecipeName() {
    return recipeName;
  }

  public void setRecipeName(String recipeName) {
    this.recipeName = recipeName;
  }

  public Integer getDuration() {
    return duration;
  }

  public void setDuration(Integer duration) {
    this.duration = duration;
  }

  public String getDescription() {
    return description;
  }

  public void setDescription(String description) {
    this.description = description;
  }
}
