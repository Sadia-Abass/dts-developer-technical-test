using System.ComponentModel.DataAnnotations;

namespace dts_challenge.Server.DTO
{
    public class TaskDetailDto
    {
        public long Id { get; set; }
        public string? title { get; set; }
        public string? description { get; set; }
        public string? Stautus { get; set; }
        public DateTime DueDate { get; set; }
        public DateTime DateTime { get; set; }
    }
}
