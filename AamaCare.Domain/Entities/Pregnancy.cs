using AamaCare.Domain.Enums;
using AamaCare.Domain.Shared;

namespace AamaCare.Domain.Entities;

public class Pregnancy : BaseEntity
{
    public DateTime StartDate { get; set; }
    public DateTime? DueDate { get; set; }
    public PregnancyStatus Status { get; set; }
}
