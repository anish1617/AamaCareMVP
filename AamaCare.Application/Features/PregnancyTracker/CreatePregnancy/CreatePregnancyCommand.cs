using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AamaCare.Domain.Enums;
using MediatR;

namespace AamaCare.Application.Features.PregnancyTracker.CreatePregnancy
{
    public class CreatePregnancyCommand : IRequest<Guid>
    {
        public DateTime StartDate { get; set; }
        public DateTime? DueDate { get; set; }
        public PregnancyStatus Status { get; set; }
    }
}
