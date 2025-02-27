using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AamaCare.Core.Entities
{
    public class VaccinationSchedule
    {
        public int Id { get; set; }
        [Required]
        public string VaccineName { get; set; }
        [Required]
        public int AgeInMonths { get; set; } // Age at which the vaccine is recommended
        public string? Notes { get; set; }
    }
}
