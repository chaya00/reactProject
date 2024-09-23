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
    public class LendRepository:ILendRepository
    {

        C_AND_E c_and_e;
        IMapper mapper;
        public LendRepository(C_AND_E c_and_e, IMapper mapper)
        {
            this.c_and_e = c_and_e;
            this.mapper = mapper;
        }
        public List<LendDTO> GetLends()
        {
            List <Lend>lends= c_and_e.Lends.ToList();
            return mapper.Map<List<LendDTO>>(lends);

        }
        public LendDTO GetById(int id)
        {
            Lend lend= c_and_e.Lends.Find(id);
            return mapper.Map<LendDTO>(lend);

        }
       
        public void AddLend(LendDTO lend)
        {

            c_and_e.Lends.Add(mapper.Map<Lend>(lend));
            c_and_e.SaveChanges();
        }
        public void DeleteLend(LendDTO lend)
        {
            c_and_e.Lends.Remove(mapper.Map<Lend>(lend));
            c_and_e.SaveChanges();
        }
        public void UpdateLend(LendDTO lend)
        {
            c_and_e.Lends.Update(mapper.Map<Lend>(lend));
            c_and_e.SaveChanges();
        }
    }
}
