import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom"

export default function TaskDetails(){
          const [task, setTask] = useState(0);
          const {id} = useParams();

          const navigate = useNavigate();

          const backToList = () => {
                    navigate(-1);
    }

    const Update = (id) => {
        navigate('/updateTask/' + id);
    }

          async function taskData(){                  
                              try{
                                        const response = await fetch('/api/task/' + id);
                                        if(response.ok){
                                                  const data = await response.json();
                                                  setTask(data);
                                        }
                              }
                               catch (err){
                                        console.log(err.message);
                              }                
                    }
          
                     useEffect(() => {
                                        taskData();
                              }, []);
          
    console.log(task)
    const statusOfTask = ['Select task status', 'New', 'In Progress', 'Blocked', 'Completed'];
          return(
                    <div>
                              {task && <div>
                      <div className="card shadow-lg rounded" >
                          <div className="card-header bg-primary text-white">
                              <h3 className="fw-bold">Task No: {task.id}</h3>
                                        </div>
                                        <div className="card-body">
                              <h5 className="card-title fs-4 text-start">Title: {task.title}</h5>
                              <p className="card-text fs-4 text-start"><strong>Description:</strong> {task.description}</p>
                              <p className="card-text fs-4 text-start"><strong>Status:</strong> {statusOfTask[task.status]}</p>
                              <p className="card-text fs-4 text-start"><strong>Due Date:</strong> {task.dueDate}</p>
                              <p className="card-text fs-4 text-start"><strong>Due Time:</strong> {task.dueTime}</p>
                              <button className="btn btn-primary m-3 fs-4 fw-bold" onClick={backToList}>Back to List</button>
                              <button type="submit" className="btn btn-success fs-4 fw-bold text-white fw-bold" onClick={() => Update(task.id)}>Update</button>
                                        </div>
                                        </div>
                                        </div>}
                    </div>
          )
}