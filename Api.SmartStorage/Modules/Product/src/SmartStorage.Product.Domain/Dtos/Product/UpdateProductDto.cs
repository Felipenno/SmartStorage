using System.ComponentModel.DataAnnotations;

namespace SmartStorage.Product.Domain.Dtos.Product;

public record UpdateProductDto
{
    [Required]
    public int? Id { get; init; }

    [Required]
    public string? Code { get; set; }

    [Required]
    public string? Name { get; init; }

    [Required]
    public DateTime? StartDate { get; init; }

    [Required]
    public DateTime? EndDate { get; set; }
}