import { useState, useRef, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";


export default function UpdateTask(){
    const [id, setId] = useState(0);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState(0);
    const [dueDate, setDueDate] = useState('');
    const [dueTime, setDueTime] = useState('');
                    
    const [errors, setErrors] = useState({});

    const {taskid} = useParams();

    const taskTitle = useRef('');
    const taskDescription = useRef('');
    const taskStatus = useRef('');
    const taskDueDate = useRef('');
    const taskDueTime = useRef('');

    const navigate = useNavigate();

    const backToList = () => {
                navigate(-1);
    }
    const [data, setData] = useState({});

    useEffect(() => {
                             
        fetch('/api/task/' + taskid).then((response) => {
        return response.json();
        }).then((response) => {
            setData(response)
            setId(response.id);
        setTitle(response.title);
        setDescription(response.description);
            setStatus(response.status);
            let date = new Date(response.dueDate);
            let month = "" + (date.getMonth() + 1);
            let day = "" + date.getDate();
            let year = date.getFullYear();
            console.log("year: " + year)
            if (month.length < 2) {
                month = '0' + month;
            }
            console.log("month:" + month)
            if (day.length < 2) {
                day = '0' + day;
            }
            console.log("day:" + day)
            let dueDate = `${year}-${month}-${day}`
            console.log(dueDate);
            setDueDate(dueDate);            
            setDueTime(response.dueTime);

            console.log(response)

        }).then((error) => {
            console.log(error);
        })               
    }, [])
          

    const Validation = () => {
        let error = {}

        if (title === '') {
            error.title = 'Task title is required'
        }
        setTitle(data.title);
        

        if (status === 'Select task status') {
            error.status = 'Task status is required'
        }
        setStatus(data.status);
       

        if (dueDate === '') {
            error.dueDate = 'Task dueDate is required'
        }
        let date = new Date(data.dueDate);
        let month = "" + (date.getMonth() + 1);
        let day = "" + date.getDate();
        let year = date.getFullYear();
        if (month.length < 2) {
            month = '0' + month;
        }
        if (day.length < 2) {
            day = '0' + day;
        }
        let due = `${year}-${month}-${day}`
        setDueDate(due);
  

        if (dueTime === '') {
            error.dueTime = 'task dueTime is required'
        }
        setDueTime(data.dueTime)


        setErrors({ ...error })

        return Object.keys(error).length < 1
    }

    const handleSubmitClick = async (e) => { 
        e.preventDefault();
        if (Validation()) { 
            const dataForUpdate = { id, title, description, status, dueDate, dueTime };
            console.log("status to update" + status)
            const response = await fetch('/api/task/' + taskid, {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(dataForUpdate)
            }).then(() => {
                navigate(-1);
            }).catch((err) => {
                console.log(err.message);
            });

           // const content = await response.json();
            //console.log(content);

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
                    <h3 className="fw-bold">Update Task</h3>
                </div>
                <div className="card-body"></div>
            <form className="container" onSubmit={handleSubmitClick}>
            {/*<div className="mb-3">*/}
            {/*            <label htmlFor="taskId" className="form-label "></label>*/}
            {/*                <input value={id} name="id" className="form-control" id="id" onChange={(e) => setId(e.target.value)} disabled hidden />*/}
            {/*</div>  */}
            <div className="mb-3">
                        <label htmlFor="taskTitle" className="form-label fs-3 fw-bold">Title</label>
                            <input type="text" ref={taskTitle} value={title} name="title" className={errors.title ? "form-control invalid" : "form-control"} id="taskTitle" placeholder="Enter task title" onChange={(e) => setTitle(e.target.value)} />
                            {errors.title && <span className="validation">{errors.title}</span>}
            </div>
            <div className="mb-3">
                        <label htmlFor="taskDescription" className="form-label fs-3 fw-bold">Description</label>
            <textarea name="description" ref={taskDescription} value={description} className="form-control" id="taskDescription" rows="3" placeholder="Enter task description" onChange={(e) => setDescription(e.target.value)}></textarea>
            </div>
            <div className="mb-3">
                        <label htmlFor="taskStatus" className="form-label fs-3 fw-bold">Status</label>
                            <select className={errors.status ? "form-select form-select-lg mb-3 invalid" : "form-select form-select-lg mb-3"} value={status} ref={taskStatus} id="taskStatus" name="status" onChange={(e) => setStatus(e.target.value)}>
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
                            <input type="date" ref={taskDueDate} value={dueDate} className={errors.dueDate ? "form-control invalid" : "form-control"} id="taskDueDate" rows="3" name="dueDate" onChange={(e) => setDueDate(e.target.value)} />
                            {errors.dueDate && <span className="validation">{errors.dueDate}</span>}
            </div>
            <div className="form-group mb3">
                        <label htmlFor="taskDueTime" className="form-label fs-3 fw-bold" >Due Time</label>
                            <input type="time" ref={taskDueTime} value={dueTime} className={errors.dueTime ? "form-control invalid" : "form-control"} id="taskDueTime" rows="3" name="dueTime" onChange={e => setDueTime(e.target.value)} />
                    {errors.dueTime && <span className="validation">{errors.dueTime}</span>}
                    </div>
                  
                <div className="form-group mb3">
                     <br/>
                            <button type="button" className="btn btn-danger m-3 fs-4 fw-bold" onClick={backToList}>Back to List</button>
                        <button type="submit" className="btn btn-primary m-3 fs-4 fw-bold"  >Submit</button>
                      
                </div>
                </form>
               
        </div>
        </div>
    )
}