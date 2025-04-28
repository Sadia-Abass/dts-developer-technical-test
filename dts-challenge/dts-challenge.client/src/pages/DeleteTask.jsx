import { useState } from "react";

export default function DeleteTask() {
    const [message, setMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [taskTitle, setTasktTitle] = useState("");
    []
    //const { dialog, setDialog } = useState({
    //    message: "",
    //    isLoading: false,
    //    taskTitle: ""
    //});
    //{ message, task, onDialog }

    const choice = (choose) => {
        if (choose) {
            handleDialog("", false)
        }
    }

    const handleDialog = (message, isLoading, taskTitle) => {
        /* setDialog({ message, isLoading, taskTitle });*/
        setMessage(message);
        setIsLoading(isLoading);
        setTasktTitle(taskTitle);
    }


    return (
        <div>
            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">{message}</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <p>{task}</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-success" data-bs-dismiss="modal" onClick={() => onDialog(false)}>No</button>
                            <button type="button" className="btn btn-danger" onClick={() => onDialog(true)}>Yes</button>
                        </div>
                    </div>
                </div>
            </div>

            {isLoading && (<Delete
                taskTitle={taskTitle}
                onDialog={choice}
                message={message} />)}
        </div>
          )
}