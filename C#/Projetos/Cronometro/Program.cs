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

            Console.WriteLine("Insira a inicial da medida");
            Console.WriteLine("S => Segundos");
            Console.WriteLine("M => Minutos");
            char measure = char.Parse(Console.ReadLine());
            measure = char.ToUpper(measure);

            Console.WriteLine("Quanto tempo você deseja contar?");
            int time = int.Parse(Console.ReadLine());

            if (measure == 'M')
                time *= 60;

            if (time == 0)
                System.Environment.Exit(0);

            Start(time);
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
            Menu();
        }
    }
}
