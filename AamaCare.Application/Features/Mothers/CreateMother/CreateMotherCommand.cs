using MediatR;

namespace AamaCare.Application.Features.Mothers.CreateMother;

public record CreateMotherCommand(string Name, string Email) : IRequest<Guid>;
