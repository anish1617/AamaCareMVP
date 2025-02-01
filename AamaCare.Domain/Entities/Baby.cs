using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AamaCare.Domain.Shared;

namespace AamaCare.Domain.Entities
{
    public class Baby : BaseEntity
    {
        
        public Guid PregnancyId { get; set; }
        public string Name { get; set; }
        public DateTime BirthDate { get; set; }
        public Pregnancy Pregnancy { get; set; }
    }
}
