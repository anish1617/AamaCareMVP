using AamaCare.Core.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;

namespace AamaCare.Infrastructure.Persistence;

public class AamaCareDbContext :DbContext
{
    public AamaCareDbContext(DbContextOptions<AamaCareDbContext> options) : base(options)
    {

    }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        IConfigurationRoot configuration = new ConfigurationBuilder()
            .SetBasePath(AppDomain.CurrentDomain.BaseDirectory)
            .AddJsonFile("appsettings.json")
            .Build();

        optionsBuilder.UseSqlServer(configuration.GetConnectionString("DefaultConnection"));
        
    }

    public DbSet<Mother> Mothers => Set<Mother>();
    public DbSet<Pregnancy> Pregnancies => Set<Pregnancy>();
    public DbSet<Baby> Babies => Set<Baby>();
    public DbSet<CheckupReminder> CheckupReminders => Set<CheckupReminder>();


    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Baby>(entity =>
        {
            entity.HasKey(b => b.Id);
            entity.Property(b => b.Name).IsRequired().HasMaxLength(100);
            entity.HasMany(b => b.Vaccines)
                .WithOne(v => v.Baby)
                .HasForeignKey(v => v.BabyId);
        });
    }
}
