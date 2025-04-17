using System.ComponentModel.DataAnnotations;

namespace dts_challenge.Server.DTO
{
    public class TaskDetailDto
    {
        public long Id { get; set; }
        public string? Title { get; set; }
        public string? Description { get; set; }
        public string? Status { get; set; }
        public DateTime DueDate { get; set; }
        public DateTime DueTime { get; set; }
    }
}
