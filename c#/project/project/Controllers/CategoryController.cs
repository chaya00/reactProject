using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Cors;

using BLL;
using DAL;
using DTO;
namespace project.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [EnableCors]

    public class CategoryController : ControllerBase
    {

        ICategoryRepository categoryRepository;

        public CategoryController(ICategoryRepository categoryRepository)
        {
            this.categoryRepository = categoryRepository;
        }

        [HttpGet("getcategories")]
        public List<CategoryDTO> GetCategories()
        {
            return categoryRepository.GetCategories();
        }
        [HttpGet("getById/{id:int}")]

        public IActionResult GetById(int id)
        {
            CategoryDTO category = categoryRepository.GetById(id);
            if (category == null)
                return NotFound();
            return Ok(category);
        }
        [HttpGet("GetByCategoryName")]
        public IActionResult GetByCategoryName(string categoryName)
        {
            CategoryDTO category = categoryRepository.GetByCategoryName(categoryName);
            if (category == null)
                return NotFound();
            return Ok(category);
        }
        [HttpPost("AddCategory")]
        public IActionResult AddCategory(CategoryDTO category)
        {
            if (category == null || !ModelState.IsValid)
            {
                return BadRequest();//400
            }
            CategoryDTO category2 = categoryRepository.GetById(category.Id);
            if (category2 != null)
                return Conflict();
            categoryRepository.AddCategory(category);
            return CreatedAtAction(nameof(AddCategory), new { id = category.Id }, category);

        }
        [HttpDelete("delete/{id}")]
        public IActionResult DeleteCategory(int id)
        {
            CategoryDTO category = categoryRepository.GetById(id);
            if (category == null)
                return NotFound();
            categoryRepository.DeleteCategory(category);
            return NoContent();

        }
        [HttpPut("Update/{id}")]
        public IActionResult Update(int id, CategoryDTO category)
        {
            if (category == null || !ModelState.IsValid)
            {
                return BadRequest(ModelState);//400
            }
            if (id != category.Id)
                return Conflict();
            categoryRepository.UpdateCategory(category);
            return NoContent();
        }
    }
}
