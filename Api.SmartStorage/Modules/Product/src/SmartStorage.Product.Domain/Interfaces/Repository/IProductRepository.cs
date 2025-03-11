using SmartStorage.Product.Domain.Dtos.Product;
using SmartStorage.Product.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SmartStorage.Product.Application.Interfaces.Repository;

public interface IProductRepository
{
    Task<ProductEntity> AddAsync(ProductEntity product);
    Task<bool> UpdateAsync(ProductEntity product);
    Task<ProductEntity?> GetByIdAsync(int productId);
    Task<IEnumerable<ProductEntity>> GetAllAsync(GetProductRequestDto filter);
}
