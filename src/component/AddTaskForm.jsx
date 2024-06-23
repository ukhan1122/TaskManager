import React, { useState } from "react";
import EditTaskForm from "./EditTaskForm";
import './AddTaskForm.css'


const AddTasKForm = ({onadd}) => {
    const[title,settitle]= useState("")
    
    const handlesubmit = (e) =>{
        e.preventDefault();
        if(title.trim()){
            
        onadd({id:Date.now(),title,completed:false})    
        settitle('');

        }
    }

 return(
   <div className="addtaskform">
        <form onSubmit={handlesubmit}>
            <input type="text"
             placeholder="enter task title"
             value={title}
            onChange={(e)=>settitle(e.target.value)} />
            <button type="submit">Add Task</button>
        </form>
   </div>
 )
}

export default AddTasKForm