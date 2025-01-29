import React, { useState } from 'react';

function Todo() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');
  const [isEditing, setIsEditing] = useState(false); 
  const [editIndex, setEditIndex] = useState(null); 
  // const [completedTask, setCompleteTask] = useState([]);

  const addTask = () => {
    if (task.trim()) {
      setTasks([...tasks, task])
      setTask('');
    }
  };

  const removeTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !==index)
    setTasks(updatedTasks);
    };
    
    const startEditing = (index) => {
      setIsEditing(true);
      setEditIndex(index); 
      setTask(tasks[index]); 
    };
  
    const saveTask = () => {
      if (task.trim()) {
        setTasks(tasks.map((t, i) => (i === editIndex ? task : t))); 
        setTask(''); 
        setIsEditing(false);  
        setEditIndex(null); 
      }
    };

    // const isCompleted = (key) => {
    //   if (!completedTask.includes(key)) {
    //     setCompleteTask([...completedTask, key]);
    //   } else {
    //     setCompleteTask(completedTask.filter(item => item !== key));
    //   }
    // };


 
  // const handleInputChange = (e) => {
  //   setTask(e.target.value);
  // };

  // const handleAddTask = () => {
  //   if (task) {
  //     setTasks([...tasks, task]);
  //     setTask(''); 
  //   }
  // };
  
  return (
    <div className='main-container'>
  
      <div className="container">
      <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder={isEditing ? 'Edit your task here' : 'Add your Task Here'}
          className="todo-input"
        />
        <button onClick={isEditing ? saveTask : addTask} className="btn-container">
          {isEditing ? 'Save Task' : 'Edit Task'}
        </button>
          <button onClick={addTask} className='btn-container'> Add Task</button>
      </div>
        

        <ul className="todo-list">
          {tasks.map((t, index) =>(
            <li key ={index} className="todo-item">
              <span>{t}</span>
              <buttton 
               onClick={() => startEditing(index)}>
              <i className="fa fa-pencil" aria-hidden="true"></i>
              </buttton>
              
              <button className='btn2' onClick={() => removeTask(index)} >
              <i className="fa fa-trash" aria-hidden="true"></i>
              </button>
              
            </li>
            
           ))}
     
        </ul>
        </div>
        
  );
}
export default Todo