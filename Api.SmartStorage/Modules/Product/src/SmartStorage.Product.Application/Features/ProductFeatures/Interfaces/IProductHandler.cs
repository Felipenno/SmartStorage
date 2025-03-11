using SmartStorage.Product.Domain.Common;
using SmartStorage.Product.Domain.Dtos.Product;

namespace SmartStorage.Product.Application.Features.ProductFeatures.Interfaces;

public interface IProductHandler
{
    Task<DefaultHttpResponseModel> AddAsync(CreateProductDto product);
    Task<DefaultHttpResponseModel> UpdateAsync(UpdateProductDto product);
    Task<DefaultHttpResponseModel> GetByIdAsync(int productId);
    Task<DefaultHttpResponseModel> GetAllAsync(GetProductRequestDto product);
}
