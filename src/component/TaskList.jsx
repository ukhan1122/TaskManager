import React from "react";
import Taskitem from "./TaskItem";
import { Box } from "@mui/material";

const TaskList = ({ondelete,task,ontoggle,updateTask}) => {

    return(
    <div>
         <Box sx={{ fontSize: '2em', fontWeight: 'bold', color: '#333', marginBottom: '20px' }}>
            Task List
        </Box>
        {task.map(task =>(
            
        <Taskitem
            key={task.id}
            updateTask = {updateTask}
            task = {task}
            onDelete = {ondelete}
            onToggle = {ontoggle} />

        ))}
    </div>
    )
}
export default TaskList;