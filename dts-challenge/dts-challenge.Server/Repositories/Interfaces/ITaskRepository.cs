using dts_challenge.Server.DTO;
using dts_challenge.Server.Entity;
using Microsoft.EntityFrameworkCore.ChangeTracking.Internal;

namespace dts_challenge.Server.Repositories.Interfaces
{
    public interface ITaskRepository
    {
        Task<List<CaseworkTask>> GellAllTaskAsync();
        Task<CaseworkTask?> GetByIdAsync(long id);
        Task<CaseworkTask> CreateAsync(CreateTaskDto taskDto);
        Task<CaseworkTask?> UpdateAsync(long id, UpdateTaskDto taskDto);
        Task<CaseworkTask?> DeleteAsync(long id);
    }
}
