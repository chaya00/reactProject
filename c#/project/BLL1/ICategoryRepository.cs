using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL;
using DTO;
namespace BLL
{
    public interface ICategoryRepository
    {
        List<CategoryDTO> GetCategories();
        CategoryDTO GetById(int id);
        CategoryDTO GetByCategoryName(string categoryName);
        void AddCategory(CategoryDTO category);
        void DeleteCategory(CategoryDTO category);
        void UpdateCategory(CategoryDTO category);
    }
}
