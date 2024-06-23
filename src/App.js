
import { useState } from 'react';
import './App.css';
import AddTaskForm from './component/AddTaskForm';
import TaskList from './component/TaskList';


function App() {

  const[task,settask] = useState([])

   const Addtask = (newtask)=>{
    settask([...task,newtask])
   }

   const deletetask = (taskId)=>{
    settask(task.filter(task=>task.id !== taskId))

   } 
   const toggletaskcompletion = (taskId) =>{
    settask(task.map(task=>
      task.id === taskId ?  {...task, completed: !task.completed} : task
      ))

   }

   const updateTask = (updateTask)=>{
    settask (task.map(task=>(
      task.id === updateTask.id ? updateTask : task)
    ))
   }

  return (
    <div className="App">

      <h1>Main TASK Page</h1>
      <AddTaskForm onadd = {Addtask}/>
      <TaskList
       ondelete = {deletetask}  
      task = {task}
      updateTask={updateTask}
      ontoggle = {toggletaskcompletion}

      />
    
    </div>
  );
}

export default App;
