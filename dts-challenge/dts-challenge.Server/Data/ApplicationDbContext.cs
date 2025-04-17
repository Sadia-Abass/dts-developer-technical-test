using dts_challenge.Server.Entity;
using Microsoft.EntityFrameworkCore;

namespace dts_challenge.Server.Data
{
    public class ApplicationDbContext : DbContext 
    {
        public ApplicationDbContext(DbContextOptions dbContextOptions) : base(dbContextOptions)
        {
            
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
        }

        public DbSet<CaseworkTask> CaseworkTasks { get; set; }
    }
}
