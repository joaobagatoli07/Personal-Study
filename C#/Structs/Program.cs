using System;

namespace Structs;
class Program
{
    static void Main(string[] args)
    {
        MeuMetodo();
        string nome = Nome("João", "Bagatoli");
        Console.WriteLine(nome);
    }

    static void MeuMetodo()
    {
        Console.WriteLine("C# é legal");
    }

    static string Nome(string nome, string sobrenome, int idade = 0)
    {
        return nome + " " + sobrenome;
    }
}
