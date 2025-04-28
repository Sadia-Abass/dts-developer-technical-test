import { useState } from "react";
import validation from './Validation';

export default function Edit(task){

          const [errors, setErrors] = useState({});
          const [values, setValues] = useState({
             title: '',
             description: '',
             status: '',
             dueDate: '',
             dueTime: ''
            });


          const inputValues = (e) => {
          setValues({...values, [e.target.name]: [e.target.value]});
          }

          const handleValidation = (e) =>{
          e.preventDefault();
          setErrors(validation(values));
          }

          return(                   
                    <>
                    <div className="modal fade" id="editTask" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="createTask" aria-hidden="true">
                    <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                    <h1 className="modal-title fs-5" id="editTask">update Task</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                    <form className="border p3 needs-validation" noValidate>
                    <div className="mb-3">
                    <label htmlFor="taskTitle" className="form-label">Title</label>
                    <input type="text" name="title" className="form-control" id="taskTitle" placeholder="Enter task title" onChange={e => setValues({...values, title: e.target.value})}/>
                    {errors.title && <span>{errors.title}</span>}
                    </div>
                    <div className="mb-3">
                    <label htmlFor="taskDescription" className="form-label">Description</label>
                    <textarea name="description" className="form-control" id="taskDescription" rows="3" placeholder="Enter task description" onChange={e => setValues({...values, description: e.target.value})}></textarea>
                    </div>
                    <div className="mb-3">
                    <label htmlFor="taskStatus" >Status</label>
                    <select className="form-select form-select-lg mb-3" id="taskStatus" rows="3" aria-label="Large select example" name="status" onChange={e => setValues({...values, status: e.target.value})}>
                    <option defaultValue>Select task status</option>
                    <option>New</option>
                    <option>In Progress</option>
                    <option>Blocked</option>
                    <option>Completed</option>
                    </select>
                    {errors.status && <span>{errors.status}</span>}
                    </div>
                    <div className="form-group mb3">
                    <label htmlFor="taskDueDate" className="form-label">Due Date</label>
                    <input type="date" className="form-control" id="taskDueDate" rows="3" placeholder="DD/MM/YYYY" name="dueDate" onChange={e => setValues({...values, dueDate: e.target.value})}/>
                    {errors.dueDate && <span>{errors.dueDate}</span>}
                    </div>
                    <div className="form-group mb3">
                    <label htmlFor="taskDueTime" className="form-label">Due Time</label>
                    <input type="time" className="form-control" id="taskDueTime" rows="3" name="dueTime" onChange={e => setValues({...values, dueTime: e.target.value})}/>
                    {errors.dueTime && <span>{errors.dueTime}</span>}
                    
                    </div>
                    </form> 
                    </div> 
                    <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="submit" className="btn btn-primary" onClick={handleValidation}>Submit</button>
                    </div> 
                    </div>
                    </div>
                    </div>
                    </>
                    )
}