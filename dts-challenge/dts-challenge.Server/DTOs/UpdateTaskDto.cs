using System.ComponentModel.DataAnnotations;

namespace dts_challenge.Server.DTO
{
    public class UpdateTaskDto
    {
        public long Id { get; set; }
        [Required(ErrorMessage = "Please provide a title")]
        public string? Title { get; set; }
        public string? Description { get; set; }
        [Required(ErrorMessage = "Please provide a status")]
        public byte Status { get; set; } 
        [Required(ErrorMessage = "Please provide due date")]
        public string? DueDate { get; set; }
        [Required(ErrorMessage = "Please provide due time")]
        public string? DueTime { get; set; }
    }
}
