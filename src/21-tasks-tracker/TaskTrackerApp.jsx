import React, {useState} from 'react'
import Title from '../components/Title.jsx';
import {TableStyle} from './TableStyle.jsx';
import Task from './Task.jsx';
import NewTask from './NewTask.jsx';


export default function TaskTrackerApp() {

    const [newTask, setNewTask] = useState({
        date:"",
        type:"",
        completed:""
    });

    const handleChangeDate = (e) => {
        setNewTask({...newTask, date:e.target.value});
    };

    const handleChangeType = (e) => {
        setNewTask({...newTask, type:e.target.value});
    };


    let tasks = [{date: "", type:""}];
    const [taskList, setTaskList] = useState(tasks);


    const addNewTask = () =>{
      setTaskList([...taskList, {date:newTask.date, type:newTask.type}]);
    }

    const handleCompleted = (e) => {
      e.target.classList.toggle("completed");
    };


    const handleDeleteTask = (e) => {
      window.confirm("Delete this Task")&& e.target.parentElement.remove();
    };


  return (
    <>
      <Title text ={"Task Tracker"}/>
      <TableStyle> 
        <ul className='table-head'>
            <li>Date</li>
            <li>Task</li>
        </ul>
        <Task date={newTask.date} setDate={handleChangeDate}
              type={newTask.type} setType={handleChangeType}
              onClick={addNewTask} />

        <ul className='table-row'>
        {/* <li className='completed'>task #1</li>                
            <li>task #2</li>
            <li>task #3</li>
            <li>task #4</li>     */} 

          {taskList.map((tas, index)=>{
              return tas.date !== "" && tas.type !== "" ? 
                     (<NewTask key={index} 
                                date={tas.date} 
                                type={tas.type} 
                                onTaskClick={handleCompleted} 
                                onDelete={handleDeleteTask}/>): null;
          })}

            
        </ul>
        
      </TableStyle>
    </>
  );
}
