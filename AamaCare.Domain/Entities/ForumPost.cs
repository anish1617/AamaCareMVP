using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Principal;
using System.Text;
using System.Threading.Tasks;
using AamaCare.Core.Shared;

namespace AamaCare.Core.Entities
{
    public class ForumPost : BaseEntity
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public string Title { get; set; }
        public string Content { get; set; }
        public DateTime CreatedDate { get; set; }

        public User User { get; set; }
        // ... potentially other properties for replies, likes, etc.
    }
}
