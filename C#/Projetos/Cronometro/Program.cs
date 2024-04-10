using System;
using System.Threading;

namespace StopWatch
{
    class Program
    {
        static void Main(string[] args)
        {
            Menu();
        }

        static void Menu()
        {
            Console.Clear();

            Console.WriteLine("--- CRONOMETRO ---");

            Console.WriteLine("Escolha a métrica");
            Console.WriteLine("S = Segundos");
            Console.WriteLine("M = Minutos");
            string metrica = Console.ReadLine();

            Console.WriteLine("Quanto tempo você deseja contar?");
            int time = int.Parse(Console.ReadLine());
        }

        static void Start(int time)
        {
            int currentTime = 0;

            while (currentTime != time)
            {
                Console.Clear();
                currentTime++;
                Console.WriteLine(currentTime);
                Thread.Sleep(1000); // a execução fica em espera por 1s
            }

            Console.Clear();
            Console.WriteLine("Cronometro finalizado");
            Thread.Sleep(2500);
        }
    }
}
