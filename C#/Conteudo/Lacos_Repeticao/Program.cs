using System;

namespace LacosRepeticao;
class Program
{
    static void Main(string[] args)
    {
        int valor = 3;

        Console.WriteLine("For");
        for (int i = 0; i <= 5; i++)
            Console.WriteLine(i);

        Console.WriteLine("While");
        while (valor <= 5)
        {
            Console.WriteLine(valor);
            valor++;
        }

        Console.WriteLine("Do while");
        do
        {
            Console.WriteLine(valor);
            valor++;
        } while (valor < 5);
    }
}