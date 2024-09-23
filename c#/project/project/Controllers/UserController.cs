using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using DAL;
using BLL;
using DTO;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Authorization;


namespace project.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [EnableCors]
    public class UserController : ControllerBase
    {
        IUserRepository userRepository;

        public UserController(IUserRepository userRepository)
        {
            this.userRepository = userRepository;
        }

        [HttpGet("getusers")]
        public IActionResult GetUsers()
        {
            List <UserDTO> users = userRepository.GetUsers();
            if (users == null)
                return NotFound();
            return Ok(users);
        }
        [HttpGet("getById/{id:int}")]

        public IActionResult GetById(int id)
        {
            UserDTO user = userRepository.GetById(id);
            if(user==null)
                return NotFound();
            return Ok(user);
        }
        [HttpGet("getBypassword/{password:int}")]

        public IActionResult GetByPassword(string password)
        {
            UserDTO user = userRepository.GetByPassword(password);
            if (user == null)
                return NotFound();
            return Ok(user);
        }
        [HttpGet("GetByUserName/{name}")]
        public IActionResult GetByUserName(string userName) 
        {
            UserDTO user = userRepository.GetByUserName(userName);
            if (user == null)
                return NotFound();
            return Ok(user);
        }
        [HttpPost("AddUser")]
        public IActionResult AddUser(UserDTO user)
        {
            if (user == null || !ModelState.IsValid)
                return BadRequest();//400

            UserDTO user2 = userRepository.GetByUserName(user.Name);
            if (user2 != null)
                return Conflict();
            user.Password = BCrypt.Net.BCrypt.HashPassword(user.Password);
            user.Role = "user";
            userRepository.AddUser(user);
            UserDTO user1 = userRepository.GetByUserName(user.Name);
            return Ok(user1);
        }
        [HttpPost("login/{name},{password}")]
        public IActionResult Login(string name,string password)
        {
            
            //כאן נבדוק אם המשתמש שנכנס אכן קיים במערכת

            UserDTO user = userRepository.GetByUserName(name);
            if (user == null)
                return NotFound();

            //בודקת שהסיסמא שהמשתמש הכניס היא אכן אותה סיסמא
            if (!BCrypt.Net.BCrypt.Verify(password, user.Password))
                return BadRequest();

            string Token = JwtUtils.createJWT(user);
            return Ok( new{ Token,user });//כאן מחזירים את הטוקן שהצליח

        }
        [Authorize(Roles = "admin")]
        [HttpDelete("delete/{id}")]
        public IActionResult DeleteUser(int id)
        {
            UserDTO user = userRepository.GetById(id);
            if (user == null)
                return NotFound();
            userRepository.DeleteUser(user);
            return NoContent();

        }

        [Authorize(Roles = "admin")]
        [HttpPut("Update/{id}")]
        public IActionResult Update(int id, UserDTO user)
        {
            if (user == null || !ModelState.IsValid)
            {
                return BadRequest(ModelState);//400
            }
            if (id != user.Id)
                return Conflict();
            userRepository.UpdateUser(user);  
            return NoContent(); 
        }
    }
}
