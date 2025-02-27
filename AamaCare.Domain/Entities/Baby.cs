using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AamaCare.Core.Shared;

namespace AamaCare.Core.Entities
{
    public class Baby : BaseEntity
    {

        public string Name { get; set; } = string.Empty;
        public DateTime DateOfBirth { get; set; }
        public string BloodGroup { get; set; } = string.Empty;
        public decimal BirthWeight { get; set; }
        public decimal BirthHeight { get; set; }
        public string ParentContact { get; set; } = string.Empty;
        public string PictureUrl { get; set; }
        public ICollection<Vaccine> Vaccines { get; set; } = new List<Vaccine>();
        public ICollection<HealthDocument> HealthDocuments { get; set; } = new List<HealthDocument>();
    }
}
