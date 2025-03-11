namespace SmartStorage.Product.Domain.Dtos.Product;

public record GetProductResponseDto(int Id, string Code, string Name, DateTime StartDate, DateTime? EndDate);