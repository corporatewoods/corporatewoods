using System;

namespace Jeju
{
    public class Program
    {
        public static void Main()
        {
            using (var db = new BloggingContext())
            {
                db.Blogs.Add(new Blog { Url = "http://blogs.msdn.com/adonet" });
                var count = db.SaveChanges();
                Console.WriteLine("{0} records saved to database", count);

                Console.WriteLine();
                Console.WriteLine("All blogs in database:");
                foreach (var blog in db.Blogs)
                {
                    Console.WriteLine(" - {0}", blog.Url);
                }
                var items = new int[] { 97, 92, 81, 60 };
                studyLinq();
            }
        }
        private int studyLinq(int[] items)
        {
            IEnumerable<int> itemQuery =
            from item in items
            where item > 200
            select item;

            foreach (int i in itemQuery)
            {
                Console.Write(i + " ");
            }
        }
    }
}