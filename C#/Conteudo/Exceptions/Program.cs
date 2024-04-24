using System;

namespace Exceptions
{
    class Program
    {
        static void Main(string[] args)
        {
            var arr = new int[3];

            try
            {
                for (int i = 0; i < 10; i++)
                {
                    // System.IndexOutOfRangeException: Index was outside the bounds of the array.
                    Console.WriteLine(arr[i]);
                }
            }
            catch (IndexOutOfRangeException ex)
            {
                Console.WriteLine("Index could not be found");
                Console.WriteLine(ex.Message);
            }
            catch (CustomException ex)
            {
                Console.WriteLine("Unexpected exception");
                Console.WriteLine(ex.When);
            }
            catch (Exception ex)
            {
                Console.WriteLine("My bad! Something went wrong");
                Console.WriteLine(ex.Message);
            }
            finally
            {
                Console.WriteLine("We have finished!");
            }

            Save("");
        }

        static void Save(string text)
        {
            if (string.IsNullOrEmpty(text))
            {
                // throw new ArgumentNullException("Insert a valid text");
                throw new CustomException(DateTime.Now);
            }

        }
    }

    public class CustomException : Exception
    {
        public CustomException(DateTime date)
        {
            When = date;
        }
        public DateTime When { get; set; }
    }
}
