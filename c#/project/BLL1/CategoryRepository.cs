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
    public class CategoryRepository:ICategoryRepository
    {
        C_AND_E c_and_e;
        IMapper mapper;
        public CategoryRepository(C_AND_E c_and_e, IMapper mapper)
        {
            this.c_and_e = c_and_e;
            this.mapper = mapper;
        }
        public List<CategoryDTO> GetCategories()
        {
            List<Category>categories= c_and_e.Categories.ToList();
            return mapper.Map<List<CategoryDTO>>(categories);

        }

        public CategoryDTO GetById(int id)
        {
            Category category = c_and_e.Categories.Find(id);
            return mapper.Map<CategoryDTO>(category);

        }
        public CategoryDTO GetByCategoryName(string categoryName)
        {
            Category category= c_and_e.Categories.Where(x => x.Name == categoryName).First();
            return mapper.Map<CategoryDTO>(category);

        }
        public void AddCategory(CategoryDTO category)
        {

            c_and_e.Categories.Add(mapper.Map<Category>(category));
            c_and_e.SaveChanges();
        }
        public void DeleteCategory(CategoryDTO category)
        {
            c_and_e.Categories.Remove(mapper.Map<Category>(category));
            c_and_e.SaveChanges();
        }
        public void UpdateCategory(CategoryDTO category)
        {
            c_and_e.Categories.Update(mapper.Map<Category>(category));
            c_and_e.SaveChanges();
        }
    }
}
