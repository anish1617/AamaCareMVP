using System.Reflection;
using AamaCare.Api.Shared.ErrorHandling;
using AamaCare.Application.Features.PregnancyTracker.CreatePregnancy;
using AamaCare.Application.Shared.Interfaces;
using AamaCare.Infrastructure.Persistence;
using AamaCare.Infrastructure.Persistence.Repositories;
using FluentValidation;
using FluentValidation.AspNetCore;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers()
    .AddApplicationPart(Assembly.GetExecutingAssembly());

// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
builder.Services.AddOpenApi();
builder.Services.AddMediatR(cfg =>
{
    cfg.RegisterServicesFromAssembly(typeof(CreatePregnancyCommand).Assembly);
});

builder.Services.AddDbContext<AamaCareDbContext>(options =>
{
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection"));
});

builder.Services.AddScoped(typeof(IGenericRepository<>), typeof(PregnancyRepository));
builder.Services.AddTransient<ExceptionHandlingMiddleware>();
builder.Services.AddFluentValidationAutoValidation();
builder.Services.AddFluentValidationClientsideAdapters();
builder.Services.AddValidatorsFromAssemblyContaining<CreatePregnancyValidator>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}
app.UseMiddleware<ExceptionHandlingMiddleware>();

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
