using Microsoft.EntityFrameworkCore;
using SmartStorage.Product.Application.Interfaces.Repository;
using SmartStorage.Product.Domain.Dtos.Product;
using SmartStorage.Product.Domain.Entities;

namespace SmartStorage.Product.Infra.Data.Providers.EfCore.Repository;

public class ProductRepository(ProductModuleDbContext appDbContext) : IProductRepository
{
    private readonly ProductModuleDbContext _appDbContext = appDbContext;

    public async Task<ProductEntity> AddAsync(ProductEntity product)
    {
        await _appDbContext.ProductEntity.AddAsync(product);
        await _appDbContext.SaveChangesAsync();

        return product;
    }

    public async Task<IEnumerable<ProductEntity>> GetAllAsync(GetProductRequestDto filter)
    {
        var page = filter.Page.GetValueOrDefault() > 0 && filter.Page.GetValueOrDefault() <= 1000 ? filter.Page.GetValueOrDefault() : 1;
        var pageSize = filter.PageSize.GetValueOrDefault() > 0 && filter.PageSize.GetValueOrDefault() <= 100 ? filter.PageSize.GetValueOrDefault() : 10;

        return await _appDbContext.ProductEntity
            .Where(x =>
                   (string.IsNullOrWhiteSpace(filter.Code) || x.Code == filter.Code)
                && (string.IsNullOrWhiteSpace(filter.Name) || x.Name == filter.Name)
                && (!filter.StartDate.HasValue             || x.StartDate == filter.StartDate)
                && (!filter.EndDate.HasValue               || x.EndDate == filter.EndDate)
            ).Skip((page - 1) * pageSize).Take(pageSize).AsNoTracking().ToListAsync();
    }

    public async Task<ProductEntity?> GetByIdAsync(int productId)
    {
        return await _appDbContext.ProductEntity.AsNoTracking().FirstOrDefaultAsync(x => x.Id == productId);
    }

    public async Task<bool> UpdateAsync(ProductEntity product)
    {
        var productToUpdate = await _appDbContext.ProductEntity.FirstOrDefaultAsync(x => x.Id == product.Id);
        if (productToUpdate == null) return false;

        productToUpdate.UpdateProductName(product.Name);
        productToUpdate.UpdateProductEndDate(product.EndDate);

        return (await _appDbContext.SaveChangesAsync()) > 0;
    }
}
