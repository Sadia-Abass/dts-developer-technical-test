using dts_challenge.Server.DTO;
using dts_challenge.Server.Entity;

namespace dts_challenge.Server.Mappers
{
    public static class TaskMapper
    {
        public static CreateTaskDto MapToCreateTaskDto(this CaseworkTask caseworkTask)
        {
            return new CreateTaskDto
            {
                Title = caseworkTask.title,
                Description = caseworkTask.description,
                Status = caseworkTask.Stautus,
                DueDate = caseworkTask.DueDate,
                DueTime = caseworkTask.DueTime
            };
        }

        public static TaskDetailDto MapToTaskDetailDto(this CaseworkTask caseworkTask)
        {
            return new TaskDetailDto 
            {
                Title = caseworkTask.title,
                Description = caseworkTask.description,
                Status = caseworkTask.Stautus,
                DueDate = caseworkTask.DueDate,
                DueTime = caseworkTask.DueTime
            };
        }

        public static UpdateTaskDto MapToUpdateTaskDto(this CaseworkTask caseworkTask)
        {
            return new UpdateTaskDto
            {
                Title = caseworkTask.title,
                Description = caseworkTask.description,
                Status = caseworkTask.Stautus,
                DueDate = caseworkTask.DueDate,
                DueTime = caseworkTask.DueTime
            };
        }
    }
}
