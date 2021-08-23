import React, { useState } from 'react';
import './Form.css';

const Form = (props) => {
    const [text,setText] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();

        const newTask = {
            id: Math.random().toString(),
            taskName: text
        }

        if(text.trim().length !== 0){
            props.newTaskBringer(newTask)
        }

        setText("");

    }

    const textChange = (e) => {
        setText(e.target.value);
    }

    return (
        <form onSubmit={submitHandler} className="container"> 
            <input value={text} onChange={textChange} type="text" className="input-field"/>
            <button className="add-btn">Add Todo</button>
        </form>
    )
}

export default Form;