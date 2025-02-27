using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AamaCare.Core.Enums;

namespace AamaCare.Core.Entities
{
    public class Vaccine
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public DateTime? AdministeredDate { get; set; }
        public string? AdministeredBy { get; set; }
        public DateTime NextDueDate { get; set; }
        public string? CertificateUrl { get; set; }
        public string? Notes { get; set; }
        // Navigation property
        public int BabyId { get; set; }
        public Baby? Baby { get; set; }
        public VaccineStatus Status => CalculateStatus();

        private VaccineStatus CalculateStatus()
        {
            if (AdministeredDate.HasValue) return VaccineStatus.Completed;

            var timeUntilDue = NextDueDate - DateTime.Today;
            return timeUntilDue <= TimeSpan.Zero
                ? VaccineStatus.Overdue
                : timeUntilDue <= TimeSpan.FromDays(7)
                    ? VaccineStatus.DueSoon
                    : VaccineStatus.Upcoming;
        }
    }
}
