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

    public class ProductController : ControllerBase
    {
        IProductRepository productRepository;

        public ProductController(IProductRepository productRepository)
        {
            this.productRepository = productRepository;
        }

        [HttpGet("GetProducts")]
        public List<ProductDTO> GetProducts()
        {
            return productRepository.GetProducts();
        }
        [HttpGet("GetById/{id:int}")]

        public IActionResult GetById(int id)
        {
            ProductDTO product = productRepository.GetById(id);
            if (product == null)
                return NotFound();
            return Ok(product);
        }
        [HttpGet("GetByProductName/{name}")]
        public IActionResult GetByProductName(string productName)
        {
            ProductDTO product = productRepository.GetByProductName(productName);
            if (product == null)
                return NotFound();
            return Ok(product);
        }

        [HttpPost("AddProduct")]
        public IActionResult AddProduct(ProductDTO product)
        {
            if (product == null || !ModelState.IsValid)
            {
                return BadRequest();//400
            }
            ProductDTO product2 = productRepository.GetById(product.Id);
            if (product2 != null)
                return Conflict();
            productRepository.AddProduct(product);
            return CreatedAtAction(nameof(AddProduct), new { id = product.Id }, product);

        }
        [HttpDelete("delete/{id}")]
        public IActionResult DeleteProduct(int id)
        {
            ProductDTO product = productRepository.GetById(id);
            if (product == null)
                return NotFound();
            productRepository.DeleteProduct(product);
            return NoContent();

        }
        [HttpPut("Update/{id}")]
        public IActionResult Update(int id, ProductDTO product)
        {
            if (product == null || !ModelState.IsValid)
            {
                return BadRequest(ModelState);//400
            }
            if (id != product.Id)
                return Conflict();
            productRepository.UpdateProduct(product);
            return  NoContent();
        }
    }
}
