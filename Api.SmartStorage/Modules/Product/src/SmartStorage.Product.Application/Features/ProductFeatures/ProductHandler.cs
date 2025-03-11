using SmartStorage.Product.Application.Features.ProductFeatures.Interfaces;
using SmartStorage.Product.Application.Interfaces.Repository;
using SmartStorage.Product.Domain.Common;
using SmartStorage.Product.Domain.Dtos.Product;
using SmartStorage.Product.Domain.Entities;

namespace SmartStorage.Product.Application.Features.ProductFeatures;

public class ProductHandler(IProductRepository productRepository) : IProductHandler
{
    private readonly IProductRepository _productRepository = productRepository;

    public async Task<DefaultHttpResponseModel> AddAsync(CreateProductDto product)
    {
        var entity = ProductMapper.MapFromCreateProductDto(product);

        var result = await _productRepository.AddAsync(entity);

        return new DefaultHttpResponseModel(true, result, "");
    }

    public async Task<DefaultHttpResponseModel> GetAllAsync(GetProductRequestDto product)
    {
        var result = await _productRepository.GetAllAsync(product);

        return new DefaultHttpResponseModel(true, result, "");
    }

    public async Task<DefaultHttpResponseModel> GetByIdAsync(int productId)
    {
        var result = await _productRepository.GetByIdAsync(productId);

        return new DefaultHttpResponseModel(true, result, "");
    }

    public async Task<DefaultHttpResponseModel> UpdateAsync(UpdateProductDto product)
    {
        var entity = ProductMapper.MapFromUpdateProductDto(product);

        var result = await _productRepository.UpdateAsync(entity);

        return new DefaultHttpResponseModel(result, result, "");
    }
}
