using System.ComponentModel.DataAnnotations;

namespace SmartStorage.Product.Domain.Dtos.Product;

public record GetProductRequestDto
{
    public string? Code { get; init; }
    public string? Name { get; init; }
    public DateTime? StartDate { get; init; }
    public DateTime? EndDate { get; init; }

    [Required]
    public int? Page { get; init; }

    [Required]
    public int? PageSize { get; init; }

}
