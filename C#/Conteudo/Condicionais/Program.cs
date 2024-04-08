using System;

namespace Condicionais;
class Program
{
    static void Main(string[] args)
    {
        int idade = 20;
        var maiorIdade = 18;
        bool temDocumento = false;

        if (25 != 32) Console.WriteLine("É diferente");

        if (idade >= maiorIdade && temDocumento)
            Console.WriteLine("Pode entrar");
        else
            Console.WriteLine("Não pode entrar");
    }
}
