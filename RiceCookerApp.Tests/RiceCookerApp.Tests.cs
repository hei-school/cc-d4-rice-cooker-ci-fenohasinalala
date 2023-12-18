using NUnit.Framework;
using RiceCookerApp;

namespace RiceCookerApp.Tests
{
    [TestFixture]
    public class RiceCookerTests
    {
        [Test]
        public void StartCooking_ShouldSetCookerStatusToCooking()
        {
            // Arrange
            var riceCooker = new RiceCooker();

            // Act
            riceCooker.StartCooking("Test Recipe", "Test Description", 15);

            // Assert
            Assert.That(riceCooker.CookerStatus, Is.EqualTo(RiceCooker.Status.COOKING));
        }

        // Add more test cases as needed
    }
}
