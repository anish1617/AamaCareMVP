using AamaCare.Domain.Entities;
using MediatR;

namespace AamaCare.Application.Features.PregnancyTracker.Queries
{
    public class GetPregnancyByIdQuery : IRequest<Pregnancy>
    {
        public Guid Id { get; set; }
    }
}
