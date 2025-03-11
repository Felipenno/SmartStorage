using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using SmartStorage.Product.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SmartStorage.Product.Infra.Data.Providers.EfCore;

public sealed class ProductModuleDbContext(DbContextOptions<ProductModuleDbContext> options, IConfiguration configuration) : DbContext(options)
{
    private readonly IConfiguration _configuration = configuration;

    public DbSet<ProductEntity> ProductEntity { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder.UseNpgsql(_configuration.GetConnectionString("PostgreSQL"));
        optionsBuilder.LogTo(Console.WriteLine);
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.ApplyConfigurationsFromAssembly(typeof(ProductModuleDbContext).Assembly);

        base.OnModelCreating(modelBuilder);
    }
}
