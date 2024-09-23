using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL;
using DTO;
namespace BLL
{
    public interface IProductRepository
    {
        List<ProductDTO> GetProducts();
        ProductDTO GetById(int id);
        ProductDTO GetByProductName(string ProductName);
        void AddProduct(ProductDTO product);
        void DeleteProduct(ProductDTO product);

        void UpdateProduct(ProductDTO product);
    }
}
