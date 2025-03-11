using SmartStorage.Product.Domain.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SmartStorage.Product.Domain.Entities;

public class ProductEntity: BaseEntity
{
    public int? Id { get; init; }
    public string Code { get; init; } = string.Empty;
    public string Name { get; private set; } = string.Empty;

    protected ProductEntity() { }

    public ProductEntity(int? id, string code, string name, DateTime startDate)
    {
        Id = id;
        Code = code;
        Name = name;
        StartDate = startDate;
    }

    public ProductEntity(int? id, string code, string name, DateTime startDate, DateTime? endDate) : this(id, code, name, startDate)
    {
        EndDate = endDate;
    }

    public void UpdateProductName(string name)
    {
        Name = name;
    }

    public void UpdateProductEndDate(DateTime? endDate)
    {
        EndDate = endDate;
    }
}
