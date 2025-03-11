using System.ComponentModel.DataAnnotations;

namespace SmartStorage.Product.Domain.Dtos.Product;

public record CreateProductDto
{
    [Required]
    public string? Code { get; init; }

    [Required]
    public string? Name { get; init; }

    [Required]
    public DateTime? StartDate { get; init; }

    [Required]
    public DateTime? EndDate { get; init; }
}
