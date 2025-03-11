using Microsoft.AspNetCore.Mvc.ViewFeatures;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.FileProviders;
using SmartStorage.Product.Application.Features.ProductFeatures.Interfaces;
using SmartStorage.Product.Application.Features.ProductFeatures;
using SmartStorage.Product.Application.Interfaces.Repository;
using SmartStorage.Product.Infra.Data.Providers.EfCore;
using SmartStorage.Product.Infra.Data.Providers.EfCore.Repository;

namespace SmartStorage.Product.WebApi;

public static class ProductModule
{
    public static void AddProductModule(this WebApplicationBuilder builder)
    {
        ConfigureControllers(builder);
        ConfigureModuleSettings(builder);
        ConfigureDependencyInjection(builder);
    }

    private static void ConfigureModuleSettings(this WebApplicationBuilder builder)
    {
        var env = builder.Environment;
        var moduleAssemblyLocation = typeof(ProductModule).Assembly.Location;
        var directory = Path.GetDirectoryName(moduleAssemblyLocation);
        var fileProvider = new PhysicalFileProvider(directory ?? string.Empty);
        builder.Services.AddSingleton<IFileProvider>(fileProvider);
        builder.Configuration.
            AddJsonFile(fileProvider, "productModuleSettings.json", false, true).
            AddJsonFile($"productModuleSettings.{env.EnvironmentName}.json", true, true); ;
    }

    private static void ConfigureControllers(this WebApplicationBuilder builder)
    {
        var moduleAssembly = typeof(ProductModule).Assembly;
        builder.Services.AddControllers().AddApplicationPart(moduleAssembly);
    }

    private static void ConfigureDependencyInjection(this WebApplicationBuilder builder)
    {
        builder.Services.AddDbContext<ProductModuleDbContext>();
        builder.Services.AddScoped<IProductHandler, ProductHandler>();

        builder.Services.AddScoped<IProductRepository, ProductRepository>();
    }

}
