import Create from "./Create";
import Delete from "./Delete";
import Edit from "./Edit";
import Details from "./Details";
import { useEffect, useState } from "react";

export default function Index(){
          const [tasks, setTasks] = useState();
          //const [open, setOpen] = useState(false);
          //const [close, setClost] = useState

          useEffect(() => {
                    taskData();
          }, []);

          const content = tasks === undefined ? <p><em>Loading ... </em></p>: <table className="table table-striped" aria-labelledby="tableLabel">
          <thead>
          <tr>
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
          {tasks.map(task =>
                    <tr key={task.title}>
                    <td>{task.title}</td>
                    <td>{task.status}</td>
                    <td>{task.dueDate}</td>
                    <td>{task.dueTime}</td>
                    <td><button className="btn btn-info">View</button></td>
                    <td><button className="btn btn-success" data-bs-toggle="modal" data-bs-target="#editTask">Update</button></td>
                    <td><button className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#deleteTask">Delete</button></td>
                    </tr>
          )}
          </tbody>
          </table>;

          return(
                    <div>
                              <h1>Index</h1> 
                              <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#createTask" onClick={Create}>+ Add Task</button>
                              <Create />
                              {content}                         
                              
                              <Edit/>
                              <Details/>
                              <Delete/>
                    </div>
          );

          async function taskData(){
                    const response = await fetch('/api/task');
                    if(response.ok){
                              const data = await response.json();
                              setTasks(data);
                    }
          }
}