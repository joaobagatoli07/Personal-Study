using System;

namespace VariaveisTiposDeDado
{
    class Program
    {
        static void Main(string[] args)
        {
            int valorInteiro = 100;
            float valorReal = 25.5f;

            valorReal = valorInteiro; // 100.0f

            valorInteiro = (int)valorReal; // cast
        }
    }
}