import React from 'react'
import './TaskList.css'
const TaskList = (props) => {

    const deleteTask = (key) => {
        const updatedList = props.allTaskList.filter(item => {
            return item.id !== key
        })

        props.updateTaskList(updatedList);
    }

    return (
        <div>
            {props.allTaskList.map((task)=>{
                return <div className="container-list">
                    <li key={task.id}>{task.taskName}</li>
                    <button className="del-btn" onClick={()=>deleteTask(task.id)}>Delete</button>
                </div>
            })}
        </div>
    )
}

export default TaskList;