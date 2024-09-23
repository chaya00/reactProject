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
    public class UserRepository : IUserRepository
    {

        C_AND_E c_and_e;
        IMapper mapper;
        public UserRepository(C_AND_E c_and_e, IMapper mapper)
        {
            this.c_and_e = c_and_e;
            this.mapper = mapper;
        }


        public List<UserDTO> GetUsers()
        {
            List < User>users= c_and_e.Users.ToList();
            return mapper.Map<List<UserDTO>>(users);    
        }

        public UserDTO GetById(int id)
        {
            User user= c_and_e.Users.Find(id);
            return mapper.Map<UserDTO>(user);
        }
        public UserDTO GetByPassword(string password)
        {
            User user = c_and_e.Users.Where(x => x.Password == password).FirstOrDefault();
            return mapper.Map<UserDTO>(user);

        }

        public UserDTO GetByUserName(string name)
        {
            User user= c_and_e.Users.Where(x => x.Name == name).FirstOrDefault();
            return mapper.Map<UserDTO>(user);
        }

        public void AddUser(UserDTO user)
        {
            c_and_e.Users.Add(mapper.Map<User>(user));
            c_and_e.SaveChanges();
        }
        public void UpdateUser(UserDTO user)
        {
            c_and_e.Users.Update(mapper.Map<User>(user));
            c_and_e.SaveChanges();

        }
        public void DeleteUser(UserDTO user)
        {
            c_and_e.Users.Remove(mapper.Map<User>(user));
            c_and_e.SaveChanges();
        }
    }
}
                              