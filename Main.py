from RiceCookerService import RiceCookerService
from RiceCookerView import RiceCookerView


class Main:
    @staticmethod
    def main():
        rice_cooker_view = RiceCookerView(RiceCookerService())
        rice_cooker_view.run()


if __name__ == "__main__":
    Main.main()
