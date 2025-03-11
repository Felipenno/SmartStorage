using System.Net;

namespace SmartStorage.Product.Domain.Common;

public class DefaultHttpResponseModel(bool success, object? responseObject, string message, HttpStatusCode statusCode = default)
{
    public bool Success { get; set; } = success;
    public object? ResponseObject { get; set; } = responseObject;
    public HttpStatusCode StatusCode { get; set; } = statusCode;
    public string Message { get; set; } = message;
}
