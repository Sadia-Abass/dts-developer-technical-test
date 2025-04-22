using dts_challenge.Server.DTO;
using dts_challenge.Server.Entity;

namespace dts_challenge.Server.Mappers
{
    public static class TaskMapper
    {
        public static CaseworkTask MapToCreateTaskDto(this CreateTaskDto createTaskDto)
        {
            return new CaseworkTask
            {
                Title = createTaskDto.Title,
                Description = createTaskDto.Description,
                Status = createTaskDto.Status,
                DueDate = createTaskDto.DueDate,
                DueTime = createTaskDto.DueTime
            };
        }

        public static TaskDetailDto MapToTaskDetailDto(this CaseworkTask caseworkTask)
        {
            return new TaskDetailDto 
            {
                Title = caseworkTask.Title,
                Description = caseworkTask.Description,
                Status = caseworkTask.Status,
                DueDate = caseworkTask.DueDate,
                DueTime = caseworkTask.DueTime
            };
        }

        public static UpdateTaskDto MapToUpdateTaskDto(this CaseworkTask caseworkTask)
        {
            return new UpdateTaskDto
            {
                Title = caseworkTask.Title,
                Description = caseworkTask.Description,
                Status = caseworkTask.Status,
                DueDate = caseworkTask.DueDate,
                DueTime = caseworkTask.DueTime
            };
        }
    }
}
