namespace FamilyBudgetPlanner.API.DTOs;
public class UpdateExpenseDto
{
    public decimal? Amount { get; set; }

    public string? Category { get; set; }

    public string? Description { get; set; }

    public DateTime? Date { get; set; }
}

