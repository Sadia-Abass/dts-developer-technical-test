using System.ComponentModel.DataAnnotations;

namespace dts_challenge.Server.DTO
{
    public class CreateTaskDto
    {
        public long Id { get; set; }
        [Required(ErrorMessage = "Please provide a title")]
        public string? title { get; set; }
        public string? description { get; set; }
        [Required(ErrorMessage = "Please provide a status")]
        public string? Status { get; set; }
        [Required(ErrorMessage = "Please provide due date")]
        public DateTime DueDate { get; set; }
        [Required(ErrorMessage = "Please provide a due time")]
        public DateTime DueTime { get; set; }
        public DateTime CreatedDate { get; set; }
    }
}
