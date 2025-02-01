using AamaCare.Application.Features.Mothers.CreateMother;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace AamaCare.Api.Features.Mothers.Controller
{
    [ApiController]
    [Route("api/mothers")]
    public class MothersController : ControllerBase
    {
        private readonly IMediator _mediator;

        public MothersController(IMediator mediator) => _mediator = mediator;

        [HttpPost]
        public async Task<IActionResult> CreateMother(CreateMotherCommand command)
        {
            var result = await _mediator.Send(command);
            return Ok(result);
        }
    }
}
