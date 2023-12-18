package org.lova;

import static org.junit.Assert.assertEquals;

import java.io.ByteArrayOutputStream;
import java.io.PrintStream;
import java.time.Instant;
import org.junit.Test;
import org.lova.model.RiceCooker;

public class RiceCookerServiceTest {

  @Test
  public void testShowStatusNoCooking() {
    RiceCooker riceCooker = new RiceCooker();
    String expectedOutput = "\nStatus: OFF\nNo cooking has been done\n";

    // Redirect System.out to capture the output
    ByteArrayOutputStream outputStream = new ByteArrayOutputStream();
    System.setOut(new PrintStream(outputStream));

    riceCooker.showStatus();

    // Reset System.out
    System.setOut(System.out);

    assertEquals(expectedOutput, outputStream.toString());
  }

  @Test
  public void testShowStatusCooking() {
    RiceCooker riceCooker = new RiceCooker();
    riceCooker.startCooking("Test Recipe", "Test Description", 30);

    ByteArrayOutputStream outputStream = new ByteArrayOutputStream();
    System.setOut(new PrintStream(outputStream));

    riceCooker.showStatus();

    System.setOut(System.out);

    String expectedOutput =
        "\nStatus: COOKING\n" + "Recipe: Test Recipe\n" + "Time remains: 29 MIN\n";
    assertEquals(expectedOutput, outputStream.toString());
  }

  @Test
  public void testShowStatusWarming() {
    RiceCooker riceCooker = new RiceCooker();
    riceCooker.startCooking("Test Recipe", "Test Description", 1);
    riceCooker.updateStatus(Instant.now().plusSeconds(61));

    ByteArrayOutputStream outputStream = new ByteArrayOutputStream();
    System.setOut(new PrintStream(outputStream));

    riceCooker.showStatus();

    System.setOut(System.out);

    String expectedOutput = "\nStatus: WARMING\n" + "Cooking done!\n";
    assertEquals(expectedOutput, outputStream.toString());
  }
}
