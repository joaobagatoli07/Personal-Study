using System;
using System.Text;

namespace Strings;
class Program
{
    static void Main(string[] args)
    {
        // GUID
        var guidID = Guid.NewGuid();
        string id = guidID.ToString();
        id = id.Substring(0, 8);
        Console.WriteLine(id);
        // id = new Guid("7f078bbb-f2ba-43da-8af3-1df15fa565de");

        // Interpolação
        var price = 10.2;
        var texto = "O preço do produto é " + price;
        Console.WriteLine(texto);

        var texto2 = string.Format(texto, price);
        Console.WriteLine(texto2);

        var texto3 = $" O preço do produto é {price} ";
        Console.WriteLine(texto3);

        // Comparação
        var conteudo = "teste";
        Console.WriteLine(conteudo.CompareTo("teste"));
        Console.WriteLine(conteudo.Contains("t"));
        Console.WriteLine(conteudo.StartsWith("t"));
        Console.WriteLine(conteudo.EndsWith("t"));
        Console.WriteLine(conteudo.Equals("e"));

        // Indices
        string cadeiaCaracteres = "Este texto é um teste";
        Console.WriteLine(cadeiaCaracteres[0]);
        Console.WriteLine(cadeiaCaracteres.IndexOf("é"));
        Console.WriteLine(cadeiaCaracteres.LastIndexOf("e"));

        // Transformações
        Console.WriteLine(texto.ToLower());
        Console.WriteLine(texto.ToUpper());
        Console.WriteLine(conteudo.Insert(5, " aqui"));
        Console.WriteLine(conteudo.Remove(2, 1));
        Console.WriteLine(texto.Replace("O preço do produto", "Este preço"));
        Console.WriteLine(cadeiaCaracteres.Split(" ")[0]);
        Console.WriteLine(cadeiaCaracteres.Split(" ")[1]);
        Console.WriteLine(cadeiaCaracteres.Split(" ")[2]);
        Console.WriteLine(cadeiaCaracteres.Split(" ")[3]);
        Console.WriteLine(cadeiaCaracteres.Split(" ")[4]);
        Console.WriteLine(conteudo.Substring(1, 2));
        Console.WriteLine(texto3.Trim());

        // Tamanho
        Console.WriteLine(conteudo.Length);

        // String Builder
        var frase = new StringBuilder();
        frase.Append("Estou programando em C#, ");
        frase.Append("uma linguagem de programação ");
        frase.Append("de alto nível, compilada e" );
        frase.Append("fortemente tipada");
        Console.WriteLine(frase);
    }
}