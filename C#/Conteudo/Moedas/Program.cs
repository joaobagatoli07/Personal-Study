using System;
using System.Globalization;

namespace Currency
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.Clear();

            decimal valor = 10.25m;
            Console.WriteLine(valor.ToString(
                "C",
                CultureInfo.CreateSpecificCulture("pt-br")));

            Console.WriteLine(Math.Round(valor));
            Console.WriteLine(Math.Ceiling(valor));
            Console.WriteLine(Math.Floor(valor));
        }
    }
}
