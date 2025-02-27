using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AamaCare.Core.Enums;

namespace AamaCare.Application.Features.Vaccines
{
    public record VaccineRecordDto(
    int Id,
    string VaccineName,
    DateTime DueDate,
    DateTime? AdministeredDate,
    string? Notes,
    VaccineStatus Status);
}
