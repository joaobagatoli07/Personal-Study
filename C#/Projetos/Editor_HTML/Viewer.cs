using System;
using System.Text.RegularExpressions;

namespace HTMLEditor
{
    public static class Viewer
    {
        public static void Show(string text)
        {
            Console.Clear();
            Console.WriteLine("Modo de visualização");
            Console.WriteLine("====================");
            Replace(text);
            Console.WriteLine("====================");
            Console.ReadKey();
            Menu.Show();
        }

        public static void Replace(string text)
        {
            var strong = new Regex(@"<\s*strong[^>]*>(.*?)<\s*/\s*strong>");
            var words = text.Split(' ');

            for (int i = 0; i < words.Length; i++)
            {
                if (strong.IsMatch(words[i]))
                {
                    Console.ForegroundColor = ConsoleColor.Red;
                    Console.Write(words[i].Substring((words[i].IndexOf('>')) + 1, (((words[i].LastIndexOf('<')) - 1) - words[i].IndexOf('>'))));
                    Console.WriteLine(" ");
                }
                else
                {
                    Console.Write(words[i]);
                    Console.WriteLine(" ");
                }
            }
        }
    }
}