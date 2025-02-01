using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AamaCare.Domain.Shared;

namespace AamaCare.Domain.Entities
{
    public class Mother : BaseEntity
    {
       
        public string Name { get; set; }
        public string Email { get; set; }
        public List<Pregnancy>? Pregnancies { get; set; }
    }
}
