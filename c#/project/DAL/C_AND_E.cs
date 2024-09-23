
using Microsoft.EntityFrameworkCore;

namespace DAL
{
    public class C_AND_E:DbContext

    {   
        public C_AND_E(DbContextOptions<C_AND_E> options) : base(options)
        {

        }
        public DbSet<Category> Categories { get; set; }
        public DbSet<Comment> Comments { get; set; }
        public DbSet<Lend> Lends { get; set; }
        public DbSet<Product> Products { get; set; }
        public DbSet<User> Users { get; set; }
        

    }
}