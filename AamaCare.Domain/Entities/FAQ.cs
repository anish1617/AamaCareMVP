using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Principal;
using System.Text;
using System.Threading.Tasks;
using AamaCare.Core.Shared;

namespace AamaCare.Core.Entities
{
    public class FAQ : BaseEntity
    {
        public int Id { get; set; }
        public string Question { get; set; }
        public string Answer { get; set; }
    }
}
