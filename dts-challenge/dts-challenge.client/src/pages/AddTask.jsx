import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";


export default function AddTask(){
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState(0);
    const [dueDate, setDueDate] = useState('');
    const [dueTime, setDueTime] = useState('');
    const [errors, setErrors] = useState({});

    const taskTitle = useRef('');
    const taskDescription = useRef('');
    const taskStatus = useRef(null);
    const taskDueDate = useRef('');
    const taskDueTime = useRef('');

    useEffect(() => {
        setErrors('');
    }, [title, description, status, dueDate, dueTime]);
                  

    const navigate = useNavigate();

    const backToList = () => {
            navigate(-1);
    }

    const Validation = () => {
        let error = {}

        if (title === '') {
            error.title = 'Task title is required'
        }

        if (status === 0) {
            error.status = 'Task status is required'
        }

        if (dueDate === '') {
            error.dueDate = 'Task dueDate is required'
        }

        if (dueTime === '') {
            error.dueTime = 'task dueTime is required'
        }

        setErrors({ ...error })

        return Object.keys(error).length < 1
    }

    const handleSubmitClick = async (e) => {
        e.preventDefault();
        if (Validation()) {
            const response = await fetch('api/task', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    title: title,
                    description: description,
                    status: status,
                    dueDate: dueDate,
                    dueTime: dueTime
                })
            });

            const content = await response.json();
            console.log(content);

            taskTitle.current.value = "";
            taskDescription.current.value = "";
            taskStatus.current.value = "";
            taskDueDate.current.value = "";
            taskDueTime.current.value = "";
        }
    }
          
          return(
              <div>
                  <div className="card shadow-lg rounded">
                      <div className="card-header bg-primary text-white ">
                          <h3 className="fw-bold">Add New Task</h3>
                      </div>
                      <div className="card-body"></div>
                     <form className="container" onSubmit={handleSubmitClick}>        
                    <div className="mb-3">
                              <label htmlFor="taskTitle" className="form-label fs-3 fw-bold">Title</label>
                          <input type="text" ref={taskTitle} name="title" className={errors.title ? "form-control invalid" : "form-control"} id="taskTitle" placeholder="Enter task title" onChange={(input) => setTitle(input.target.value)}/>
                          {errors.title && <span className="validation">{errors.title}</span>}
                    </div>
                    <div className="mb-3">
                              <label htmlFor="taskDescription" className="form-label fs-3 fw-bold">Description</label>
                    <textarea name="description" ref={taskDescription} className="form-control" id="taskDescription" rows="3" placeholder="Enter task description" onChange={(input) => setDescription(input.target.value)}></textarea>
                    </div>
                          <div className="mb-3">
                              <label htmlFor="taskStatus" className="form-label fs-3 fw-bold">Status</label>
                          <select className={errors.status ? "form-select form-select-lg mb-3 invalid" : "form-select form-select-lg mb-3"} ref={taskStatus} id="taskStatus" rows="3" aria-label="Large select example" name="status" onChange={(input) => setStatus(input.target.value)}>
                              <option defaultValue={0}>Select task status</option>
                              <option value={1}>New</option>
                              <option value={2}>In Progress</option>
                              <option value={3}>Blocked</option>
                              <option value={4}>Completed</option>
                    </select>
                          {errors.status && <span className="validation">{errors.status}</span>}
                    </div>
                    <div className="form-group mb3">
                              <label htmlFor="taskDueDate" className="form-label fs-3 fw-bold">Due Date</label>
                          <input type="date" ref={taskDueDate} className={errors.dueDate ? "form-control invalid" : "form-control"} id="taskDueDate" rows="3" placeholder="DD/MM/YYYY" name="dueDate" onChange={(input) => setDueDate(input.target.value)}/>
                          {errors.dueDate && <span className="validation">{errors.dueDate}</span>}
                    </div>
                    <div className="form-group mb3">
                              <label htmlFor="taskDueTime" className="form-label fs-3 fw-bold">Due Time</label>
                          <input type="time" ref={taskDueTime} className={errors.dueTime ? "form-control invalid" : "form-control"} id="taskDueTime" rows="3" name="dueTime" onChange={(input) => setDueTime(input.target.value)}/>
                          {errors.dueTime && <span className="validation">{errors.dueTime}</span>}
                          </div>
                          <div className="form-group mb3">
                              <br />
                              <button type="button" className="btn btn-danger m-3 fs-4 fw-bold" onClick={backToList}>Back to List</button>
                              <button className="btn btn-primary m-3 fs-4 fw-bold" type="submit" >Submit</button>
                          </div>
                      </form>
                  </div>
                    </div>
          )
}