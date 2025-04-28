import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Home from "./Home";


export default function TaskLists(){
          const [tasks, setTasks] = useState();
    const navigate = useNavigate();
    

          const RedirectDetail = (id) => {
                    navigate('/taskDetails/'+ id);
          }

          const Update = (id) => {
                    navigate('/updateTask/'+ id);   
    }

   

          const Remove = (id) => {
              try {
                  if (window.confirm("Are you sure you want to delete this task?")) {
                                       fetch('/api/task/'+ id, {
                                        method: 'DELETE'
                                       }).then(() => {
                                        window.location.reload();
                                       })
                              }
          
                    } catch(error){
                              console.log(error)
                    }
                   
          }

    

          async function taskData(){                  
                    try{
                              const response = await fetch('/api/task');
                              if(response.ok){
                                        const data = await response.json();
                                        setTasks(data);
                                        console.log(data)
                              }
                    }
                    catch (error){
                              console.log(error);
                    }                
          }

           useEffect(() => {
                              taskData();
           }, []);

    const statusOfTask = ['Select task status', 'New', 'In Progress', 'Blocked', 'Completed'];
    console.log('Inside status of task array: ' + statusOfTask);
                    
          const content = tasks === undefined ? <p><em>Loading ... </em></p>: <table className="table table-bordered table-striped" aria-labelledby="tableLabel">
          <thead>
                  <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Status</th>
                    <th>Due Date</th>
                    <th>Due Time</th>
                    <th>View</th>
                    <th>Update</th>
                    <th>Delete</th>
          </tr>
          </thead>
          <tbody>
          {tasks.map((task) =>
                    <tr key={task.id}>
                    <td>{task.id}</td>
                  <td>{task.title}</td>
                  <td>{statusOfTask[task.status]}</td>
                    <td>{task.dueDate}</td>
                    <td>{task.dueTime}</td>
                    <td><button className="btn btn-info text-white fw-bold" onClick={() =>  RedirectDetail(task.id)}>Details</button></td>
                  <td><button type="submit" className="btn btn-success text-white fw-bold" onClick={() => Update(task.id)}>Update</button></td>
                  <td><button className="btn btn-danger text-white fw-bold" onClick={() => Remove(task.id)}>Delete</button></td>
                    </tr>

                    
          )}
          </tbody>
          </table>;

          return(
                    <div>
                              <Home />
                              <br />
                  <div className="card shadow-lg rounded">
                      <div className="card-body">
                          <div className="card-header bg-primary text-white ">
                              <h3 className="fw-bold">Task Lists</h3>   
                          </div>
                          <br/>
                          <Link className="btn btn-info text-white float-end fs-4 fw-bold" to="/addTask">+ Add Task</Link>
                          <div className="mb-3">
                              {content}
                              
                          </div>
                                                
                                        </div>
                  </div>
                  
              </div>
                    
          )
}