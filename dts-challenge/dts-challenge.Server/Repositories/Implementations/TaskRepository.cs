using dts_challenge.Server.Data;
using dts_challenge.Server.DTO;
using dts_challenge.Server.Entity;
using dts_challenge.Server.Repositories.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace dts_challenge.Server.Repositories.Implementations
{
    public class TaskRepository : ITaskRepository
    {
        private readonly ApplicationDbContext _appDbContext;

        public TaskRepository(ApplicationDbContext appDbContext)
        {
            _appDbContext = appDbContext ?? throw new ArgumentNullException(nameof(appDbContext));
        }

        public async Task<CaseworkTask> CreateAsync(CreateTaskDto taskDto)
        {
           var task = new CaseworkTask
           {
               title = taskDto.title,
               description = taskDto.description,
               Stautus = taskDto.Status,
               DueDate = taskDto.DueDate,
               DueTime = taskDto.DueTime,
               CreatedDate = DateTime.UtcNow
           };

           await _appDbContext.CaseworkTasks.AddAsync(task);
           await _appDbContext.SaveChangesAsync();
           return task;
        }

        public async Task<CaseworkTask?> DeleteAsync(long id)
        {
            var task = await _appDbContext.CaseworkTasks.FindAsync(id);
            if (task == null) 
            {
                return null;
            }

            _appDbContext.CaseworkTasks.Remove(task);
            await _appDbContext.SaveChangesAsync();
            return task;

        }

        public async Task<List<CaseworkTask>> GellAllTaskAsync()
        {
            return await _appDbContext.CaseworkTasks.ToListAsync();
        }

        public async Task<CaseworkTask?> GetByIdAsync(long id)
        {
            return await _appDbContext.CaseworkTasks.FindAsync(id);
        }

        public async Task<CaseworkTask?> UpdateAsync(long id, UpdateTaskDto taskDto)
        {
            var task = await _appDbContext.CaseworkTasks.FindAsync(id);
            if (task == null)
            {
                return null;
            }
           
            task.title = taskDto.title;
            task.description = taskDto.description;
            task.Stautus = taskDto.Status;
            task.DueDate = taskDto.DueDate;
            task.DueTime = taskDto.DueTime;
            task.LastModifiedDate = DateTime.UtcNow;

            await _appDbContext.SaveChangesAsync();
            return task;
          
        }
    }
}
