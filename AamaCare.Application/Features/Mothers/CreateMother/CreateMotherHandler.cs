using AamaCare.Application.Shared.Interfaces;
using AamaCare.Domain.Entities;
using MediatR;

namespace AamaCare.Application.Features.Mothers.CreateMother;

public class CreateMotherHandler : IRequestHandler<CreateMotherCommand, Guid>
{
    private readonly IGenericRepository<Mother> _repository;
    public CreateMotherHandler(IGenericRepository<Mother> repository)
    {
        _repository = repository;
    }

    public async Task<Guid> Handle(CreateMotherCommand request, CancellationToken cancellationToken)
    {
        var mother = new Mother { Name = request.Name, Email = request.Email };
        await _repository.AddAsync(mother);
        return mother.Id;
    }
}
