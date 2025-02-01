using AamaCare.Domain.Enums;
using AamaCare.Domain.Shared;

namespace AamaCare.Domain.Entities;

public class Pregnancy : BaseEntity
{
    
    public Guid MotherId { get; set; }
    public Mother Mother { get; set; }
    public DateTime StartDate { get; set; }
    public DateTime? DueDate { get; set; }
    public PregnancyStatus Status { get; set; }
    public Baby Baby { get; set; }
    public List<CheckupReminder> Reminders { get; set; }
}
