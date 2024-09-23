using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Cors;

using DAL;
using BLL;
using DTO;
namespace project.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [EnableCors]

    public class LendController : ControllerBase
    {
        ILendRepository lendRepository;

        public LendController(ILendRepository lendRepository)
        {
            this.lendRepository = lendRepository;
        }

        [HttpGet("GetLends")]
        public List<LendDTO> GetLends()
        {
            return lendRepository.GetLends();
        }
        [HttpGet("GetById/{id:int}")]

        public IActionResult GetById(int id)
        {
            LendDTO lend = lendRepository.GetById(id);
            if (lend == null)
                return NotFound();
            return Ok(lend);
        }

        [HttpPost("AddLend")]
        public IActionResult AddLend(LendDTO lend)
        {
            if (lend == null || !ModelState.IsValid)
            {
                return BadRequest();//400
            }
            LendDTO lend2 = lendRepository.GetById(lend.ID);
            if (lend2 != null)
                return Conflict();
            lendRepository.AddLend(lend);
            return CreatedAtAction(nameof(AddLend), new { id = lend.ID }, lend);

        }
        [HttpDelete("delete/{id}")]
        public IActionResult DeleteLend(int id)
        {
            LendDTO lend = lendRepository.GetById(id);
            if (lend == null)
                return NotFound();
            lendRepository.DeleteLend(lend);
            return NoContent();

        }
        [HttpPut("Update/{id}")]
        public IActionResult Update(int id, LendDTO lend)
        {
            if (lend == null || !ModelState.IsValid)
            {
                return BadRequest(ModelState);//400
            }
            if (id != lend.ID)
                return Conflict();
            lendRepository.UpdateLend(lend);
            return NoContent();
        }
    }
}
