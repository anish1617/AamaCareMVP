using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using FluentValidation;

namespace AamaCare.Application.Features.PregnancyTracker.CreatePregnancy
{
    public class CreatePregnancyValidator : AbstractValidator<CreatePregnancyCommand>
    {
        public CreatePregnancyValidator()
        {
            RuleFor(x => x.StartDate).NotEmpty().LessThan(DateTime.Now);
        }
    }
}
