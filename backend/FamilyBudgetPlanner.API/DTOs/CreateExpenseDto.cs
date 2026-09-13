using System.ComponentModel.DataAnnotations;
namespace FamilyBudgetPlanner.API.DTOs;
public class CreateExpenseDto
{
    [Required]
    [Range(0.01, double.MaxValue)]
    public decimal Amount { get; set; }

    [Required]
    [MaxLength(50)]
    public string Category { get; set; } = string.Empty;

    [MaxLength(200)]
    public string? Description { get; set; }

    [Required]
    public DateTime Date { get; set; }
}