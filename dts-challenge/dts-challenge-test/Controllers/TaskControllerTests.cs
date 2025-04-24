using dts_challenge.Server.Controllers;
using dts_challenge.Server.DTO;
using dts_challenge.Server.Entity;
using dts_challenge.Server.Mappers;
using dts_challenge.Server.Repositories.Interfaces;
using FakeItEasy;
using FluentAssertions;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


namespace dts_challenge_test.Controllers
{
    public class TaskControllerTests
    {
        private readonly ITaskRepository _taskRepository;
        private readonly TaskController _taskController;
        
        public TaskControllerTests()
        {
            _taskRepository = A.Fake<ITaskRepository>();
            _taskController = new TaskController(_taskRepository);
        }

        private static CaseworkTask CreateFakeTask() => A.Fake<CaseworkTask>();
        private static UpdateTaskDto UpdateFakeTask() => A.Fake<UpdateTaskDto>();

        [Fact]
        public async Task TaskController_GetAllTask_ReturnOk()
        {
            // Arrange
            var fakeTasks = A.Fake<List<CaseworkTask>>();

            //var controller = new TaskController(fakeTaskData);

            // Act
            A.CallTo(() => _taskRepository.GetAllTaskAsync()).Returns(fakeTasks);
            var result = (OkObjectResult)await _taskController.GetAll();

            // Assert
            result.StatusCode.Should().Be(StatusCodes.Status200OK);
            result.Should().NotBeNull();
        }

        [Theory]
        [InlineData(1)]
        public async Task TaskController_GetTaskById_ReturnOk(long id)
        {
            // Arrange 
            var fakeTask = A.Fake<CaseworkTask>();

            // Act
            A.CallTo(() => _taskRepository.GetByIdAsync(id)).Returns(fakeTask);
            var result = (OkObjectResult)await _taskController.GetById(id);

            // Assert
            result.StatusCode.Should().Be(StatusCodes.Status200OK);
            result.Should().NotBeNull();
        }

        [Fact]
        public async Task TaskController_Create_ReturnCreated()
        {
            // Arrange
            var fakeTask = CreateFakeTask();
            var fakeTaskDto = A.Fake<CreateTaskDto>();

            // Act
            A.CallTo(() => _taskRepository.CreateAsync(fakeTask)).Returns(fakeTask);
            var result = (CreatedAtActionResult)await _taskController.Create(fakeTaskDto);

            // Assert
            result.StatusCode.Should().Be(201);
            result.Should().NotBeNull();
        }

        [Theory]
        [InlineData(1)]
        public async Task TaskController_Update_ReturnOK(long id)
        {
            // Arrange
           // long id = 1;
            var task = UpdateFakeTask();
            var fakeTask = A.Fake<CaseworkTask>();

            // Act 
            A.CallTo(() => _taskRepository.UpdateAsync(id, task)).Returns(fakeTask);
            var result = (OkResult)await _taskController.Update(id, task);

            // Assert 
            result.StatusCode.Should().Be(200);
            result.Should().NotBeNull();
        }

        [Fact]
        public async Task TaskController_Delete_ReturnNoContent()
        {
            // Arrange
            long id = 1L;

            // Act
            A.CallTo(() => _taskRepository.DeleteAsync(id)).Returns(true);
            var result = (NoContentResult)await _taskController.Delete(id);

            // Assert
            result.StatusCode.Should().Be(StatusCodes.Status204NoContent);
            result.Should().NotBeNull();
        }
    }
}
