using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.FileProviders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SmartStorage.Product.Application.ConfigureServices;

public static class ConfigureSettings 
{
    public static void AddFileSettingsConfiguration(this WebApplicationBuilder builder)
    {
        var env = builder.Environment;
        builder.Configuration
            .AddJsonFile("productModuleSettings.json", false, true)
            .AddJsonFile($"productModuleSettings.{env.EnvironmentName}.json", true, true);
    }

    public static IServiceCollection AddSettingsConfiguration(this IServiceCollection services)
    {
        return services;
    }
}
