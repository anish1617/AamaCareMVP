using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AamaCare.Application.Shared.Interfaces;
using AamaCare.Domain.Entities;
using MediatR;

namespace AamaCare.Application.Features.PregnancyTracker.CreatePregnancy
{
    public class CreatePregnancyCommandHandler : IRequestHandler<CreatePregnancyCommand, Guid>
    {
        private readonly IGenericRepository<Pregnancy> _repository;

        public CreatePregnancyCommandHandler(IGenericRepository<Pregnancy> repository)
        {
            _repository = repository;
        }

        public async Task<Guid> Handle(CreatePregnancyCommand request, CancellationToken cancellationToken)
        {
            var pregnancy = new Pregnancy
            {
                StartDate = request.StartDate,
                DueDate = request.DueDate,
                Status = request.Status
            };

            await _repository.AddAsync(pregnancy);
            return pregnancy.Id;
        }
    }
}
