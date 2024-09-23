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

    public class CommentController : ControllerBase
    {
        ICommentRepository commentRepository;

        public CommentController(ICommentRepository commentRepository)
        {
            this.commentRepository = commentRepository;
        }

        [HttpGet("GetComments")]
        public List<CommentDTO> GetComments()
        {
            return commentRepository.GetComments();
        }
        [HttpGet("GetById/{id:int}")]

        public IActionResult GetById(int id)
        {
            CommentDTO comment = commentRepository.GetById(id);
            if (comment == null)
                return NotFound();
            return Ok(comment);
        }
       
        [HttpPost("AddComment")]
        public IActionResult AddComment(CommentDTO comment)
        {
            if (comment == null || !ModelState.IsValid)
            {
                return BadRequest();//400
            }
            CommentDTO comment2 = commentRepository.GetById(comment.ID);
            if (comment2 != null)
                return Conflict();
            commentRepository.AddComment(comment);
            return CreatedAtAction(nameof(AddComment), new { id = comment.ID }, comment);

        }
        [HttpDelete("delete/{id}")]
        public IActionResult DeleteComment(int id)
        {
            CommentDTO comment = commentRepository.GetById(id);
            if (comment == null)
                return NotFound();
            commentRepository.DeleteComment(comment);
            return NoContent();

        }
        [HttpPut("Update/{id}")]
        public IActionResult Update(int id, CommentDTO comment)
        {
            if (comment == null || !ModelState.IsValid)
            {
                return BadRequest(ModelState);//400
            }
            if (id != comment.ID)
                return Conflict();
            commentRepository.UpdateComment(comment);
            return NoContent();
        }
    }
}
