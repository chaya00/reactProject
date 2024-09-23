using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
    public class Lend
    {
        public int ID { get; set; }
        public DateTime Date { get; set; }
        public int TakeHour { get; set; }   
        public int ReturnHour { get; set; }
        public int ProductId { get; set; }
        public virtual Product Product { get; set; }
        public int UserId { get; set; }
        public virtual User User { get; set; }

    }
}
