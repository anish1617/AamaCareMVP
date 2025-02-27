using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Principal;
using System.Text;
using System.Threading.Tasks;
using AamaCare.Core.Enums;
using AamaCare.Core.Shared;

namespace AamaCare.Core.Entities
{
    public class Notification : BaseEntity
    {
        public int Id { get; set; }
        public int BabyId { get; set; }
        public string Message { get; set; }
        public DateTime SentDate { get; set; }
        public NotificationType Type { get; set; } // e.g., Reminder, Alert

        public Baby Baby { get; set; }
    }
}
