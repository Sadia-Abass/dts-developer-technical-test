using dts_challenge.Server.Entity;
using Microsoft.EntityFrameworkCore.ChangeTracking.Internal;

namespace dts_challenge.Server.Repositories.Interfaces
{
    public interface ITaskRepository
    {
        Task<List<CaseworkTask>> GellAllTaskAsync();
        Task<CaseworkTask?> GetByIdAsync(long id);
        Task<CaseworkTask> CreateAsync(CaseworkTask task);
        Task<CaseworkTask?> UpdateAsync(long id, CaseworkTask task);
        Task<CaseworkTask?> DeleteAsync(long id);
    }
}
