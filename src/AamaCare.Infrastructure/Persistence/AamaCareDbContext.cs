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

    public DbSet<Pregnancy> Pregnancies { get; set; }

}
