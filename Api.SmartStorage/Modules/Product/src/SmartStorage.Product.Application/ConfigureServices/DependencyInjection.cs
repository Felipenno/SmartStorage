using Microsoft.Extensions.DependencyInjection;
using SmartStorage.Product.Application.Features.ProductFeatures;
using SmartStorage.Product.Application.Features.ProductFeatures.Interfaces;
using SmartStorage.Product.Application.Interfaces.Repository;
using SmartStorage.Product.Infra.Data.Providers.EfCore;
using SmartStorage.Product.Infra.Data.Providers.EfCore.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SmartStorage.Product.Application.ConfigureServices;

public static class DependencyInjection
{
    public static IServiceCollection AddDependencyInjection(this IServiceCollection services)
    {
        services.AddDbContext<ProductModuleDbContext>();

        services.AddScoped<IProductHandler, ProductHandler>();
        services.AddScoped<IProductRepository, ProductRepository>();

        return services;
    }
}
