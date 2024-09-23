using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
    public class LendDTO
    {
        public int ID { get; set; }
        public DateTime Date { get; set; }
        public int TakeHour { get; set; }
        public int ReturnHour { get; set; }
        public int ProductId { get; set; }
        public  ProductDTO? Product { get; set; }
        public int UserId { get; set; }
        public  UserDTO? User { get; set; }
    }
}
