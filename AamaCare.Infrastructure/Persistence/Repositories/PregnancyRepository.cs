using AamaCare.Application.Shared.Interfaces;
using AamaCare.Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace AamaCare.Infrastructure.Persistence.Repositories;

public class PregnancyRepository : IGenericRepository<Pregnancy>
{
    private readonly AamaCareDbContext _context;

    public PregnancyRepository(AamaCareDbContext context)
    {
        _context = context;
    }

    public async Task<Guid> AddAsync(Pregnancy entity)
    {
        await _context.Set<Pregnancy>().AddAsync(entity);
        await _context.SaveChangesAsync();
        return entity.Id;
    }

    public async Task DeleteAsync(Pregnancy entity)
    {
        _context.Set<Pregnancy>().Remove(entity);
        await _context.SaveChangesAsync();
    }

    public async Task<IReadOnlyList<Pregnancy>> GetAllAsync()
    {
        return await _context.Set<Pregnancy>().ToListAsync();
    }

    public async Task<Pregnancy?> GetByIdAsync(Guid id)
    {
        return await _context.Set<Pregnancy>().FindAsync(id);
    }

    public async Task UpdateAsync(Pregnancy entity)
    {
        _context.Entry(entity).State = EntityState.Modified;
        await _context.SaveChangesAsync();
    }
}
