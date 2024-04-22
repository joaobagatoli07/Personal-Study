using System;

namespace Array
{

    class Program
    {
        static void Main(string[] args)
        {
            Console.Clear();

            var arr = new int[5] { 1, 2, 3, 4, 5 };
            arr[0] = 12;

            // for (int i = 0; i < arr.Length; i++)
            // {
            //     Console.WriteLine(arr[i]);
            // }

            foreach (var item in arr)
               Console.WriteLine(item);
              
        }
    }
}