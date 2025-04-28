export default function Validation(values){
          let errorMessage = {}

          if(values.title === ""){
                    errorMessage.title = "Title is required";
          }

          if(values.status === ""){
                    errorMessage.status = "Status is required";
          }

          if(values.dueDate === ""){
                    errorMessage.dueDate = "Due date is required";
          }

          if(values.dueTime === ""){
                    errorMessage.dueTime = "Due time is required";
          }

          return errorMessage;
}