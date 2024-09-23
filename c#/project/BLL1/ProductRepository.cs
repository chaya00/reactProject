using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL;
using DTO;
using AutoMapper;
namespace BLL
{
    public class ProductRepository:IProductRepository
    {
        C_AND_E c_and_e;
        IMapper mapper;
        public ProductRepository(C_AND_E c_and_e, IMapper mapper)
        {
            this.c_and_e = c_and_e;
            this.mapper = mapper;   
        }
        public List<ProductDTO> GetProducts()
        {
            List < Product >products= c_and_e.Products.ToList();
            return mapper.Map<List<ProductDTO>>(products);

        }
        public ProductDTO GetById(int id)
        {
            Product product = c_and_e.Products.Find(id);
            return mapper.Map<ProductDTO>(product);

        }
        public ProductDTO GetByProductName(string ProductName)
        {
            Product product= c_and_e.Products.Where(x => x.Name == ProductName).First();
            return mapper.Map<ProductDTO>(product);

        }
        public void AddProduct(ProductDTO product)
        {
            c_and_e.Products.Add(mapper.Map<Product>(product));
            c_and_e.SaveChanges();
        }
        public void DeleteProduct(ProductDTO product)
        {
            c_and_e.Products.Remove(mapper.Map<Product>(product));
            c_and_e.SaveChanges();
        }

        public void UpdateProduct(ProductDTO product)
        {
            c_and_e.Products.Update(mapper.Map<Product>(product));
            c_and_e.SaveChanges();
        }

    }
}
