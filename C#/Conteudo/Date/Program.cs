using System;

namespace Date
{
    class Program
    {
        static void Main(string[] args)
        {
            var data = new DateTime(2005, 12, 7); 
            var dataAtual = DateTime.Now;
            Console.WriteLine(data);
            Console.WriteLine(dataAtual);
            Console.WriteLine(dataAtual.Year);
        }
    }
}