using System;

namespace HTMLEditor
{
    public static class Menu
    {
        public static void Show()
        {
            Console.Clear();
            DrawScreen();
            WriteOptions();

            var option = short.Parse(Console.ReadLine());
            HandleMenuOption(option);
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

        public static void WriteOptions()
        {
            Console.SetCursorPosition(3, 2);
            Console.WriteLine("Editor HTML");
            Console.SetCursorPosition(3, 3);
            Console.WriteLine("===================");
            Console.SetCursorPosition(3, 4);
            Console.WriteLine("Selecione uma opção");
            Console.SetCursorPosition(3, 6);
            Console.WriteLine("1 - Novo arquivo");
            Console.SetCursorPosition(3, 7);
            Console.WriteLine("2 - Abrir arquivo");
            Console.SetCursorPosition(3, 9);
            Console.WriteLine("0 - Sair");
            Console.SetCursorPosition(3, 10);
            Console.Write("Opção: ");
        }

        public static void HandleMenuOption(short option)
        {
            switch (option)
            {
                case 1:
                    Editor.Show();
                    break;
                case 2:
                    Console.WriteLine("View");
                    break;
                case 0:
                    Console.Clear();
                    Environment.Exit(0);
                    break;
                default:
                    Show();
                    break;
            }
        }
    }
}