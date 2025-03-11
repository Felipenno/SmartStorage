using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using SmartStorage.Product.Domain.Common;
using System.Net;
using System.Text.Json;

namespace SmartStorage.Product.Application.ConfigureServices;

public static class Middlewares
{
    //WebApplication
    public static WebApplication UseCustomExceptionHandler(this WebApplication app)
    {
        app.UseMiddleware<BackofficeExceptionHandlerMiddleware>();

        return app;
    }
}


public abstract class AbstractExceptionHandlerMiddleware(RequestDelegate next, ILogger<AbstractExceptionHandlerMiddleware> logger)
{
    private readonly ILogger _logger = logger;

    private readonly RequestDelegate _next = next;

    public abstract DefaultHttpResponseModel GetResponse(Exception exception);

    public async Task Invoke(HttpContext context)
    {
        try
        {
            await _next(context);
        }
        catch (Exception exception)
        {
            // log the error
            _logger.LogError(exception, "Erro ao executar {Context} | {Message}", context.Request.Path.Value, exception.Message);
            var response = context.Response;
            response.ContentType = "application/json";

            // get the response code and message
            var res = GetResponse(exception);
            response.StatusCode = (int)res.StatusCode;
            await response.WriteAsync(JsonSerializer.Serialize(res));
        }
    }
}

public class BackofficeExceptionHandlerMiddleware(RequestDelegate next, ILogger<AbstractExceptionHandlerMiddleware> logger) : AbstractExceptionHandlerMiddleware(next, logger)
{
    public override DefaultHttpResponseModel GetResponse(Exception exception)
    {
        var code = exception switch
        {
            KeyNotFoundException or FileNotFoundException   => HttpStatusCode.NotFound,
            UnauthorizedAccessException                     => HttpStatusCode.Unauthorized,
            ArgumentException or InvalidOperationException  => HttpStatusCode.BadRequest,
            _ => HttpStatusCode.InternalServerError,
        };

        return new DefaultHttpResponseModel(false, null, "Ocorreu um erro inesperado", code);
    }
}



