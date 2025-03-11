using SmartStorage.Product.Domain.Dtos.Product;
using SmartStorage.Product.Domain.Entities;

namespace SmartStorage.Product.Application.Features.ProductFeatures;

public static class ProductMapper
{
    public static ProductEntity MapFromCreateProductDto(CreateProductDto dto)
    {
        return new ProductEntity(null, dto.Code ?? string.Empty, dto.Name ?? string.Empty, dto.StartDate ?? DateTime.Now, dto.EndDate);
    }

    public static ProductEntity MapFromUpdateProductDto(UpdateProductDto dto)
    {
        return new ProductEntity(dto.Id, dto.Code ?? string.Empty, dto.Name ?? string.Empty, dto.StartDate ?? DateTime.Now, dto.EndDate);
    }

    public static GetProductResponseDto MapToGetProductResponseDto(this ProductEntity product)
    {
        return new GetProductResponseDto(product.Id.GetValueOrDefault(), product.Code, product.Name, product.StartDate, product.EndDate);
    }

    public static IEnumerable<GetProductResponseDto> MapToGetProductResponseDto(this List<ProductEntity> productList)
    {
        return productList.Select(x => x.MapToGetProductResponseDto());
    }
}
