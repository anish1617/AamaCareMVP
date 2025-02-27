using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AamaCare.Core.Shared;

namespace AamaCare.Core.Entities
{
    public class HealthDocument : BaseEntity
    {
        public int BabyId { get; set; }
        public string DocumentType { get; set; } //eg. vaccination, certificate, prescription
        public string FileUrl { get; set; }
        public DateTime UploadDate { get; set; }
        public Baby? Baby { get; set; }
    }
}
