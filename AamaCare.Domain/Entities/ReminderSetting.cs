using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AamaCare.Core.Entities
{
    public class ReminderSetting
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public bool EnableEmailReminders { get; set; }
        public bool EnableSMSReminders { get; set; }
        // ... other reminder settings

        public User User { get; set; }
    }
}
