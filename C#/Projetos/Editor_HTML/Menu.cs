using System;

namespace HTMLEditor
{
    public static class Menu
    {
        public static void Show()
        {
            Console.Clear();
            DrawScreen();
        }

        public static void DrawScreen()
        {
            DrawColumns(30);
            DrawLines(10);
            DrawColumns(30);
        }

        public static void DrawColumns(int quantityColumns)
        {
            Console.Write("+");
            for (int columns = 0; columns <= quantityColumns; columns++)
                Console.Write("-");
            Console.Write("+");
            Console.Write("\n");
        }

        public static void DrawLines(int quantityLines)
        {
            for (int lines = 0; lines <= quantityLines; lines++)
            {
                Console.Write("|");
                for (int columns = 0; columns <= 30; columns++)
                    Console.Write(" ");
                Console.Write("|");
                Console.Write("\n");
            }
        }
    }
}