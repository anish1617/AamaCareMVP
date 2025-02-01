using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AamaCare.Domain.Shared;

namespace AamaCare.Domain.Entities
{
    public class CheckupReminder : BaseEntity
    {
       
        public Guid PregnancyId { get; set; }
        public DateTime DueDate { get; set; }
        public string Title { get; set; }
        public string Desscription { get; set; }
        public Pregnancy Pregnancy { get; set; }
    }
}
