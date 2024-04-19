using System;
using System.Globalization;

namespace Date
{
    class Program
    {
        static void Main(string[] args)
        {
            // Obtendo datas
            var data = new DateTime(2005, 12, 7);
            DateTime dataAtual = DateTime.Now;
            Console.WriteLine(data);
            Console.WriteLine(dataAtual);
            Console.WriteLine(dataAtual.Year);
            Console.WriteLine(dataAtual.DayOfWeek);

            // Formatando datas (yyyy = year, MM = month, dd = day, hh = hour, mm = minute, ss = second)
            Console.WriteLine(String.Format("{0:MM}", dataAtual));
            Console.WriteLine(String.Format("{0:t}", dataAtual));
            Console.WriteLine(String.Format("{0:d}", dataAtual));
            Console.WriteLine(String.Format("{0:D}", dataAtual));
            Console.WriteLine(String.Format("{0:f}", dataAtual));

            // Acrescentar algo a data
            Console.WriteLine(dataAtual.AddDays(12));
            Console.WriteLine(dataAtual.AddMonths(1));
            Console.WriteLine(dataAtual.AddYears(1));
            Console.WriteLine(dataAtual.AddHours(3));
            Console.WriteLine(dataAtual.AddMinutes(40));
            Console.WriteLine(dataAtual.AddSeconds(60));

            // Comparar datas
            if (data > dataAtual)
                Console.WriteLine("É maior");
            else
                Console.WriteLine("É menor");

            if (dataAtual.Date == DateTime.Now.Date)
                Console.WriteLine("É igual");
            else
                Console.WriteLine("É diferente");

            // Datas de acordo com cultura
            var br = new CultureInfo("pt-BR");
            var en = new CultureInfo("en-US");
            var atual = CultureInfo.CurrentCulture;
            Console.WriteLine(DateTime.Now.ToString("D", en));

            // Horário global
            Console.WriteLine(DateTime.UtcNow);
            Console.WriteLine(DateTime.ToLocalTime()); // aplica o timezone

            // Horario com timezone específico
            var timezoneAustralia = TimeZoneInfo.FindSystemTimeZoneById("Pacific/Auckland");
            var horaAustralia = TimeZoneInfo.ConvertTimeFromUtc(DateTime.UtcNow, timezoneAustralia);
            Console.WriteLine(horaAustralia);
        }
    }
}