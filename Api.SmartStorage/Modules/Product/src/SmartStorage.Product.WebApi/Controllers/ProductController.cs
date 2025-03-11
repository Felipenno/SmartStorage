using Microsoft.AspNetCore.Mvc;
using SmartStorage.Product.Application.Features.ProductFeatures.Interfaces;
using SmartStorage.Product.Domain.Dtos.Product;

namespace SmartStorage.Product.WebApi.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ProductController(IProductHandler productHandler) : ControllerBase
{
    private readonly IProductHandler _productHandler = productHandler;

    [HttpPost]
    public async Task<IActionResult> Insert([FromBody] CreateProductDto createProduct)
    {
        var result = await _productHandler.AddAsync(createProduct);

        return Ok(result);
    }

    [HttpPut]
    public async Task<IActionResult> Update([FromBody] UpdateProductDto updateProduct)
    {
        var result = await _productHandler.UpdateAsync(updateProduct);

        return Ok(result);
    }

    [HttpGet("{productId}")]
    public async Task<IActionResult> GetById([FromRoute] int productId)
    {
        var result = await _productHandler.GetByIdAsync(productId);

        return Ok(result);
    }

    [HttpGet("GetAll")]
    public async Task<IActionResult> GetAll([FromQuery] GetProductRequestDto productRequest)
    {
        var result = await _productHandler.GetAllAsync(productRequest);

        return Ok(result);
    }
}