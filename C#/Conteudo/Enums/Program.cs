using System;

namespace Introducao
{
    class Program
    {
        static void Main(string[] args)
        {
            var mouse = new Product(1, "Mouse", 299.97, EProductType.Product);

            mouse.Id = 55;

            Console.WriteLine(mouse.Id);
            Console.WriteLine(mouse.Name);
            Console.WriteLine(mouse.Type);
            Console.WriteLine(mouse.Price);
            Console.WriteLine(mouse.PriceInDolar(5.02));
        }

    }

    struct Product
    {

        public Product(int id, string name, double price, EProductType type)
        {
            Id = id;
            Name = name;
            Price = price;
            Type = type;
        }

        public int Id;
        public string Name;
        public double Price;
        public EProductType Type;

        public double PriceInDolar(double dolar)
        {
            return Price * dolar;
        }
    }

    enum EProductType
    {
        Product = 1,
        Service = 2
    }
}

