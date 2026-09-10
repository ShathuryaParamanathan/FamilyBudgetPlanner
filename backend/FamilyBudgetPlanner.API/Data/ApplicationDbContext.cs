using Microsoft.EntityFrameworkCore;
using FamilyBudgetPlanner.API.Models;

namespace FamilyBudgetPlanner.API.Data;
public class ApplicationDbContext : DbContext
{
    public ApplicationDbContext(
        DbContextOptions<ApplicationDbContext> options) : base(options)
    {
        
    }
public DbSet<Expense> Expenses { get; set; }
}
