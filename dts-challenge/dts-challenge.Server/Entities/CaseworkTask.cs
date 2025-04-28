using System.ComponentModel.DataAnnotations;

namespace dts_challenge.Server.Entity
{
    public class CaseworkTask
    {
        [Key]
        public long Id { get; set; }
        public string? Title { get; set; }
        public string? Description { get; set; }
        public byte Status { get; set; }
        public DateOnly DueDate { get; set; }
        public TimeOnly DueTime { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime LastModifiedDate { get; set; }
    }
}
