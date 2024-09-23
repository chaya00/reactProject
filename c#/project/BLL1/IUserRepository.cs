using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using BLL;
using DAL;
using DTO;
namespace BLL
{
    public interface IUserRepository
    {
         List<UserDTO> GetUsers();
         UserDTO GetById(int id);
        UserDTO GetByPassword(string password);
        UserDTO GetByUserName(string userName);
         void AddUser(UserDTO user);
         void DeleteUser(UserDTO user);
        void UpdateUser(UserDTO user);

     



    }
}
