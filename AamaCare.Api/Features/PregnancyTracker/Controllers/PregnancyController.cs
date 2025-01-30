using AamaCare.Application.Features.PregnancyTracker.CreatePregnancy;
using AamaCare.Application.Features.PregnancyTracker.Queries;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace AamaCare.Api.Features.PregnancyTracker.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PregnancyController : ControllerBase
    {
        private readonly IMediator _mediator;

        public PregnancyController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpPost]
        public async Task<IActionResult> CreatePregnancy([FromBody] CreatePregnancyCommand command)
        {
            var id = await _mediator.Send(command);
            return CreatedAtAction(nameof(GetPregnancyById), new { id = id }, id);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetPregnancyById(Guid id)
        {
            var pregnancy = await _mediator.Send(new GetPregnancyByIdQuery() { Id = id });
            if(pregnancy is null)
            {
                return NotFound();
            }

            return Ok(pregnancy);
        }
    }
}
