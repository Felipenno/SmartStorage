using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using SmartStorage.Product.Domain.Entities;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace SmartStorage.Product.Infra.Data.Providers.EfCore.Config;

internal sealed class ProductConfiguration : IEntityTypeConfiguration<ProductEntity>
{
    public void Configure(EntityTypeBuilder<ProductEntity> builder)
    {
        builder.ToTable("tb_product");

        builder.HasKey(x => x.Id);
        builder.Property(x => x.Id).HasColumnName("ID");

        builder.Property(x => x.Code).HasColumnName("CODE");

        builder.Property(x => x.Name).HasColumnName("NAME");

        builder.Property(x => x.StartDate).HasColumnName("START_DATE");

        builder.Property(x => x.EndDate).HasColumnName("END_DATE");
    }
}
