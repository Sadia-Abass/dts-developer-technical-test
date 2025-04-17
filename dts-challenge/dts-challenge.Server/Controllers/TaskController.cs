using dts_challenge.Server.Data;
using dts_challenge.Server.Repositories.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace dts_challenge.Server.Controllers
{
    [Route("api/task")]
    [ApiController]
    public class TaskController : ControllerBase
    {
        private readonly ApplicationDbContext _appDbContext;
        private readonly ITaskRepository _taskRepository;

        public TaskController(ApplicationDbContext appDbContext, ITaskRepository taskRepository)
        {
            _appDbContext = appDbContext ?? throw new ArgumentNullException(nameof(appDbContext));
            _taskRepository = taskRepository ?? throw new ArgumentNullException(nameof(taskRepository));
        }
    }
}
