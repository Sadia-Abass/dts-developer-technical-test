namespace dts_challenge.Server.Entity
{
    public class Task
    {
        public long Id { get; set; }
        public string? title { get; set; }
        public string? description { get; set; }
        public string? Stautus { get; set; }
        public DateTime DueDate { get; set; }
        public DateTime DateTime { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime LastModifiedDate { get; set; }
        public bool IsDeleted { get; set; }
    }
}
