using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SmartStorage.Product.Domain.Common;

public class BaseEntity
{
    public DateTime StartDate { get; init; }
    public DateTime? EndDate { get; protected set; }
}
