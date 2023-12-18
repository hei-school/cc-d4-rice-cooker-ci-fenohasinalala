using System;
using System.Collections.Generic;

namespace RiceCookerApp
{
    public class Cook
    {
        public string Id { get; private set; }
        public string RecipeName { get; set; }
        public string Description { get; set; }
        public DateTime Debut { get; private set; }
        public int Duration { get; set; }

        public Cook(string recipeName, string description, int duration)
        {
            Id = Guid.NewGuid().ToString();
            RecipeName = recipeName;
            Description = description;
            Debut = DateTime.Now;
            Duration = duration;
        }
    }

    public class RiceCooker
    {
        public enum Status
        {
            OFF,
            COOKING,
            WARMING
        }

        public string Id { get; private set; }
        public Status CookerStatus { get; private set; }
        public Cook CurrentCook { get; private set; }

        public RiceCooker()
        {
            Id = Guid.NewGuid().ToString();
            CookerStatus = Status.OFF;
            CurrentCook = null;
        }

        public void StartCooking(string recipeName, string recipeDescription, int duration)
        {
            CurrentCook = new Cook(recipeName, recipeDescription, duration);
            CookerStatus = Status.COOKING;
        }

        public void StopCooking()
        {
            CurrentCook = null;
            CookerStatus = Status.OFF;
        }

        public void UpdateStatus()
        {
            if (CurrentCook != null)
            {
                DateTime endDateTime = CurrentCook.Debut.AddMinutes(CurrentCook.Duration);

                if (endDateTime < DateTime.Now)
                {
                    CookerStatus = Status.WARMING;
                }
            }
        }

        public void ShowStatus()
        {
            UpdateStatus();
            Console.WriteLine();
            Console.WriteLine($"Status: {CookerStatus}");

            if (CurrentCook == null)
            {
                Console.WriteLine("No cooking has been done");
            }
            else
            {
                if (CookerStatus == Status.COOKING)
                {
                    int timeRemaining = (int)(CurrentCook.Debut.AddMinutes(CurrentCook.Duration) - DateTime.Now).TotalMinutes;
                    Console.WriteLine($"Recipe: {CurrentCook.RecipeName}");
                    Console.WriteLine($"Time remains: {timeRemaining} MIN");
                }
                else if (CookerStatus == Status.WARMING)
                {
                    Console.WriteLine("Cooking done!");
                }
            }
        }
    }

    public class InputUtils
    {
        public static string MenuPromptMsg()
        {
            return "Enter your choice: ";
        }

        public static string MenuPromptMsg(double min, double max)
        {
            return $"Select a value between {min} - {max}";
        }
    }

    public class Validation
{
    public static bool IsCooking(RiceCooker riceCooker)
    {
        if (riceCooker.CurrentCook != null && riceCooker.CookerStatus == RiceCooker.Status.COOKING)
        {
            Console.WriteLine("Rice cooker still cooking ...");
            return true;
        }
        return false;
    }

    public static double GetValidNumberInput()
    {
        double result;
        Console.WriteLine(InputUtils.MenuPromptMsg());
        while (!double.TryParse(Console.ReadLine(), out result))
        {
            Console.WriteLine("400: Invalid input. Please enter a valid number.");
        }
        return result;
    }

    public static double GetValidNumberInputRange(string promptMsg, double min, double max)
    {
        double input;
        Console.WriteLine(promptMsg);
        do
        {
            input = GetValidNumberInput();

            if (input < min || input > max)
            {
                Console.WriteLine($"400: Input must be between {min} and {max}.");
            }

        } while (input < min || input > max);

        return input;
    }
}

    public class RiceCookerService
    {
        public void CookRice(RiceCooker riceCooker)
        {
            int min = 2;
            int max = 8;
            string riceCupsPrompt = $"Enter the number of rice cups you want to cook ({min} - {max}): ";
            double riceCups = Validation.GetValidNumberInputRange(riceCupsPrompt, min, max);
            double minWater = riceCups;
            double maxWater = riceCups + 0.5;
            string waterCupsPrompt = $"Enter the number of water cups, for {riceCups} rice cups put {minWater} to {maxWater} cups of water: ";
            double waterCups = Validation.GetValidNumberInputRange(waterCupsPrompt, minWater, maxWater);

            // Display confirmation message
            Console.WriteLine("List of ingredients");
            string ingredient1 = $"Rice cups\t\tx {riceCups}";
            string ingredient2 = $"Water cups\t\tx {waterCups}";
            Console.WriteLine(ingredient1);
            Console.WriteLine(ingredient2);

            Console.Write("To proceed with cooking, please confirm (yes/no): ");
            string confirmation = Console.ReadLine() ?? "no";

            if (confirmation.ToLower() == "yes")
            {
                string recipeName = "Just Rice";
                string description = $"{ingredient1}\n{ingredient2}";
                int duration = 15;
                riceCooker.StartCooking(recipeName, description, duration);
                Console.WriteLine("Cooking started. Go to CHECK STATUS to check the remaining cooking time.");
            }
            else
            {
                Console.WriteLine("Cooking canceled. Returning to MAIN MENU.");
            }
        }

        public void CheckStatus(RiceCooker riceCooker)
        {
            riceCooker.ShowStatus();
        }

        public void SteamFood()
        {
            Console.WriteLine("501: Not implemented yet");
        }

        public void ShutDown()
        {
            Console.WriteLine("Shutting down...");
        }
    }

    public class RiceCookerView
    {
    public RiceCookerService Service { get; private set; }

        public RiceCookerView(RiceCookerService service)
        {
            Service = service ?? throw new ArgumentNullException(nameof(service));
        }

        public void Run()
        {
            RiceCooker riceCooker = new RiceCooker();

            while (true)
            {
                DisplayMainMenu();
                int min = 1;
                int max = 4;
                int choice = (int)Validation.GetValidNumberInputRange(InputUtils.MenuPromptMsg(min, max),min, max);
                if (Validation.IsCooking(riceCooker) && (choice == 1))
                {
                    continue;
                }
                switch (choice)
                {
                    case 1:
                        CookFoodMenu(riceCooker);
                        break;
                    case 2:
                        Service.SteamFood();
                        break;
                    case 3:
                        Service.CheckStatus(riceCooker);
                        break;
                    case 4:
                        Service.ShutDown();
                        return;
                    default:
                        Console.WriteLine(ExceptionManager.Error400MsgIntegerInput(min, max));
                        break;
                }
            }
        }

        private void DisplayMainMenu()
        {
            Console.WriteLine();
            Console.WriteLine("MAIN MENU:");
            Console.WriteLine("1 - COOK FOOD");
            Console.WriteLine("2 - STEAM FOOD");
            Console.WriteLine("3 - CHECK STATUS");
            Console.WriteLine("4 - SHUT DOWN");
        }

        private void CookFoodMenu(RiceCooker riceCooker)
        {
            Console.WriteLine();
            Console.WriteLine("COOK FOOD MENU:");
            Console.WriteLine("1- RICE");
            Console.WriteLine("2- FOLLOW RECIPES");
            Console.WriteLine("3- Return to MAIN MENU");

            int min = 1;
            int max = 3;
            double choice = Validation.GetValidNumberInputRange(InputUtils.MenuPromptMsg(min, max), min, max);

            switch ((int)choice)
            {
                case 1:
                    Service.CookRice(riceCooker);
                    break;
                case 2:
                    Console.WriteLine(ExceptionManager.Error501Msg());
                    break;
                case 3:
                    break;
                default:
                    Console.WriteLine(ExceptionManager.Error400MsgIntegerInput(min, max));
                    break;
            }
        }
    }

    public class ExceptionManager
    {
        public static string Error400MsgIntegerInput(double min, double max)
        {
            return $"400: Invalid choice. Please enter a valid option ({min} - {max})";
        }

        public static string Error400MsgIntegerInput()
        {
            return "400: Invalid input. Please enter a valid number.";
        }

        public static string Error501Msg()
        {
            return "501: Not implemented yet";
        }
    }

    class Program
    {
        static void Main()
        {
            RiceCookerView riceCookerView = new RiceCookerView(new RiceCookerService());
            riceCookerView.Run();
        }
    }
}
