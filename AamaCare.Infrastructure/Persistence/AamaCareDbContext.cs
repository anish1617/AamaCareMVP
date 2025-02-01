using AamaCare.Domain.Entities;
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
        // Mother -> Pregnancy (1-to-Many)
        modelBuilder.Entity<Mother>()
            .HasMany(m => m.Pregnancies)
            .WithOne(p => p.Mother)
            .HasForeignKey(p => p.MotherId);

        // Pregnancy -> Baby (1-to-1)
        modelBuilder.Entity<Pregnancy>()
            .HasOne(p => p.Baby)
            .WithOne(b => b.Pregnancy)
            .HasForeignKey<Baby>(b => b.PregnancyId);
    }
}
