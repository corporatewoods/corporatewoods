using System;
using System.Linq;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
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
                studyLinq(items);
                practiceLinq(db.Blogs);
            }
        }
        private static int studyLinq(int[] items)
        {
            IEnumerable<int> itemQuery = items.Where(x => x > 80).Select(y => y);

            foreach (int i in itemQuery)
            {
                Console.Write(i + " ");
            }
            return 0;
        }

        private static int practiceLinq(DbSet<Blog> blogs)
        {
            var blogQuery = blogs.Select(x => x);
            Console.WriteLine();
            Console.WriteLine(blogQuery.Count());
            return 0;
        }
    }
}