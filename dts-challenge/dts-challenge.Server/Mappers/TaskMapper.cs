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
                DueDate = DateOnly.Parse(createTaskDto.DueDate),
                DueTime = TimeOnly.Parse(createTaskDto.DueTime)
            };
        }

        public static TaskDetailDto MapToTaskDetailDto(this CaseworkTask caseworkTask)
        {
            return new TaskDetailDto 
            {
                Id = caseworkTask.Id,
                Title = caseworkTask.Title,
                Description = caseworkTask.Description,
                Status = caseworkTask.Status,
                DueDate = caseworkTask.DueDate.ToString(),
                DueTime = caseworkTask.DueTime.ToString()
            };
        }

        public static UpdateTaskDto MapToUpdateTaskDto(this CaseworkTask caseworkTask)
        {
            return new UpdateTaskDto
            {
                Title = caseworkTask.Title,
                Description = caseworkTask.Description,
                Status = caseworkTask.Status,
                DueDate = caseworkTask.DueDate.ToString(),
                DueTime = caseworkTask.DueTime.ToString()
            };
        }
    }
}
