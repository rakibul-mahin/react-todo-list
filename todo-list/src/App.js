import React, { useState } from 'react';
import Form from './components/Form';
import Title from './components/Title';
import TaskList from './components/TaskList';

const App = () => {
  const [taskList,setTaskList] = useState([])

  const bringTaskHandler = (newTask) => {
    setTaskList((prevTask)=>{
      return prevTask.concat(newTask);
    })
  }

  return (
    <div>
      <Title />
      <Form newTaskBringer={bringTaskHandler}/>
      <TaskList allTaskList={taskList} updateTaskList={setTaskList}/>
    </div>
  )
}

export default App;