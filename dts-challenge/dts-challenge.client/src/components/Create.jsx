import { useEffect, useState } from "react"

//import validation from './Validation'

export default function Create(){
  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState(null);
  const [status, setStatus] = useState(null);
  const [dueDate, setDueDate] = useState(null);
  const [dueTime, setDueTime] = useState(null);
  const [errors, setErrors] = useState({});
  // const [values, setValues] = useState({
  //  title: '',
  //  description: '',
  //  status: '',
  //  dueDate: '',
  //  dueTime: ''
  // });

  useEffect(() => {
    setErrors('');
  }, [title, description, status, dueDate, dueTime]);

  const Validation = () => {
    let error = {}

      if(title === ""){
          error.title = "Title is required";
      }

      if(status === ""){
          error.status = "Status is required";
      }

      if(dueDate === ""){
          error.dueDate = "Due date is required";
      }

      if(dueTime === ""){
          error.dueTime = "Due time is required";
      }

      setErrors({...error});
      return Object.keys(error).length < 1;
  }

  //onSubmit={handleValidation}

  // const inputValues = (e) => {
  //   setValues({...values, [e.target.name]: [e.target.value]});
  // }

  // const handleValidation = (e) =>{
  //   e.preventDefault();
  //   setErrors(validation(values));
  // }

  const submit = () =>{
    'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })

  }
  

  const handleSubmitClick = async (e) => {
    e.preventDefault();
    submit();
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
  }

  const isEnabled = Object.keys(errors).some(x => errors[x]);

  console.log(title, description, status, dueDate, dueTime);
  return(
            <>
            
        <div className="modal fade" id="createTask" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="createTask" aria-hidden="true">
              <div className="modal-dialog">
              <div className="modal-content">
              <div className="modal-header">
                      <h1 className="modal-title fs-5" id="createTask">Create</h1>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">

        <form className="border p-3 needs-validation" noValidate>
        <div className="form-group was-validated mb-3">
                    <label htmlFor="taskTitle" className="form-label">Title</label>
                    <input type="text" name={"title"} onChange={input => setTitle(input.target.value)} className={"form-control"} id="taskTitle" placeholder="Enter task title" required />
                    <div className="invalid-feedback">
                       Title is required
                    </div>

                    {errors.title && <span className="invalid-feedback">{errors.title}</span>}
          </div>
          <div className="mb-3">
                    <label htmlFor="taskDescription" className="form-label">Description</label>
                    <textarea name={"description"} onChange={input => setDescription(input.target.value)} className="form-control" id="taskDescription" rows="3" placeholder="Enter task description"></textarea>
          </div>
          <div className="form-group was-validated mb-3">
                    <label htmlFor="taskStatus" >Status</label>
                    <select name={"status"} onChange={input => setStatus(input.target.value)} className="form-select form-select-lg mb-3" id="taskStatus" rows="3" aria-label="Large select example"  required>
                              <option defaultValue disabled value="">Select task status</option>
                              <option value="New">New</option>
                              <option value="In Progress">In Progress</option>
                              <option value="Blocked">Blocked</option>
                              <option value="Completed">Completed</option>
                    </select>
                    <div className="invalid-feedback">
                       Status is required
                    </div>
                    {errors.status && <span>{errors.status}</span>}
          </div>
          <div className="form-group was-validated mb3">
                    <label htmlFor="taskDueDate" className="form-label">Due Date</label>
                    <input type="date" name={"dueDate"} onChange={input => setDueDate(input.target.value)} className="form-control" id="taskDueDate" rows="3" placeholder="DD/MM/YYYY" required/>
                    <div className="invalid-feedback">
                       Due Date is required
                    </div>
                    {errors.dueDate && <span>{errors.dueDate}</span>}
          </div>
          <div className="form-group was-validated mb3">
                    <label htmlFor="taskDueTime" className="form-label">Due Time</label>
                    <input type="time" name={"dueTime"} onChange={input => setDueTime(input.target.value)} className="form-control" id="taskDueTime" rows="3"  required/>
                    <div className="invalid-feedback">
                       Due Time is required
                    </div>
                    {errors.dueTime && <span>{errors.dueTime}</span>}
          </div>
                </form>
                </div> 
                <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="submit" className="btn btn-primary" onClick={handleSubmitClick}>Submit</button>
              </div>
            </div>
          </div>
        </div>            
      </>

               
  )
}