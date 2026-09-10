using FamilyBudgetPlanner.API.Models;
using FamilyBudgetPlanner.API.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace FamilyBudgetPlanner.API.Controllers;

[ApiController]
[Route("api/[controller]")]

public class ExpensesController : ControllerBase
{
    private readonly ApplicationDbContext _context;

    public ExpensesController(ApplicationDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<IActionResult> GetExpenses()
    {
        var expenses = await _context.Expenses.ToListAsync();
        return Ok(expenses);
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> GetExpenseByID(int id)
    {
        var expense = await _context.Expenses.FindAsync(id);
        if (expense == null)
        {
            return NotFound("Expense not found");

        }
        return Ok(expense);
    }

    [HttpPost]
    public async Task<IActionResult> CreateExpense(Expense expense)
    {
        _context.Expenses.Add(expense);
        await _context.SaveChangesAsync();

        return CreatedAtAction(
            nameof(GetExpenseByID),
            new { id = expense.Id },
                expense);
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> UpdateExpense(
      int id,
      UpdateExpenseDto updatedExpense)
    {
        var expense = await _context.Expenses.FindAsync(id);

        if (expense == null)
        {
            return NotFound("Expense not found");
        }

        if (updatedExpense.Amount.HasValue)
        {
            expense.Amount = updatedExpense.Amount.Value;
        }

        if (!string.IsNullOrWhiteSpace(updatedExpense.Category))
        {
            expense.Category = updatedExpense.Category;
        }

        if (!string.IsNullOrWhiteSpace(updatedExpense.Description))
        {
            expense.Description = updatedExpense.Description;
        }

        if (updatedExpense.Date.HasValue)
        {
            expense.Date = updatedExpense.Date.Value;
        }

        await _context.SaveChangesAsync();

        return Ok(expense);
    }

     [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteExpense(int id)
    {
        var expense = await _context.Expenses.FindAsync(id);
        if (expense == null)
        {
            return NotFound("Expense not found");

        }
        _context.Expenses.Remove(expense);
        await _context.SaveChangesAsync();
        return Ok("Expense deleted successfully");
    }

}