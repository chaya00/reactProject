using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL;
using DTO;
namespace BLL
{
    public interface ILendRepository
    {
        List<LendDTO> GetLends();
        LendDTO GetById(int id);
        void AddLend(LendDTO lend);
        void DeleteLend(LendDTO lend);
        void UpdateLend(LendDTO lend);
    }
}
