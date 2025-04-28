using System.ComponentModel.DataAnnotations;

namespace dts_challenge.Server.DTO
{
    public class TaskDetailDto
    {
        public long Id { get; set; }
        public string? Title { get; set; }
        public string? Description { get; set; }
        public byte Status { get; set; } 
        public string DueDate { get; set; } = string.Empty;
        public string DueTime { get; set; } = string.Empty;
    }
}
