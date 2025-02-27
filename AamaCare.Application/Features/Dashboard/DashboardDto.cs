using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AamaCare.Application.Features.Dashboard
{
    public record DashboardDto(
    string BabyName,
    string Age,
    DateTime? NextVaccinationDue,
    string? LastVaccineName,
    int OverdueCount,
    int DueSoonCount);
}
