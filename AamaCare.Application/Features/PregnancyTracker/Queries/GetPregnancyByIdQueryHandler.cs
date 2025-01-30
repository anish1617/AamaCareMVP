using AamaCare.Application.Shared.Interfaces;
using AamaCare.Domain.Entities;
using MediatR;

namespace AamaCare.Application.Features.PregnancyTracker.Queries;

public class GetPregnancyByIdQueryHandler : IRequestHandler<GetPregnancyByIdQuery, Pregnancy>
{
    private readonly IGenericRepository<Pregnancy> _repository;

    public GetPregnancyByIdQueryHandler(IGenericRepository<Pregnancy> repository)
    {
        _repository = repository;
    }

    public async Task<Pregnancy> Handle(GetPregnancyByIdQuery request, CancellationToken cancellationToken)
    {
        return await _repository.GetByIdAsync(request.Id);
    }
}
