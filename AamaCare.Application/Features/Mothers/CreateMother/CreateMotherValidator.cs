using FluentValidation;

namespace AamaCare.Application.Features.Mothers.CreateMother
{
    public class CreateMotherValidator : AbstractValidator<CreateMotherCommand>
    {
        public CreateMotherValidator()
        {
            RuleFor(x => x.Name).NotEmpty();
            RuleFor(x => x.Email).NotEmpty().EmailAddress();
        }
    }
}
