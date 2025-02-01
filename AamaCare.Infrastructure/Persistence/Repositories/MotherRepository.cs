using AamaCare.Application.Shared.Interfaces;
using AamaCare.Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace AamaCare.Infrastructure.Persistence.Repositories
{
    public class MotherRepository : IGenericRepository<Mother>
    {
        private readonly AamaCareDbContext _context;

        public MotherRepository(AamaCareDbContext context)
        {
            _context = context;
        }
        public async Task<Guid> AddAsync(Mother entity)
        {
            await _context.Set<Mother>().AddAsync(entity);
            await _context.SaveChangesAsync();
            return entity.Id;

        }

        public async Task DeleteAsync(Mother entity)
        {
            _context.Set<Mother>().Remove(entity);
            await _context.SaveChangesAsync();
        }

        public async Task<IReadOnlyList<Mother>> GetAllAsync()
        {
            return await _context.Set<Mother>().ToListAsync();
        }

        public async Task<Mother> GetByIdAsync(Guid id)
        {
            return await _context.Set<Mother>().FindAsync(id) ?? throw new KeyNotFoundException("Mother not found");
        }

        public async Task UpdateAsync(Mother entity)
        {
            _context.Entry(entity).State = EntityState.Modified;
            await _context.SaveChangesAsync();
        }
    }
}
