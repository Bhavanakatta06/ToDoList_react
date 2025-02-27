import React, { useState, useRef,useEffect } from 'react';
import'./CSS/Todo.css'
import Todoitems from './Todoitems';

let count = 0;
const Todo = () => {

    const [todos,settodos] = useState([]);
    const inputRef = useRef(null);
    const add = () =>{
        const task = inputRef.current.value.trim();
        if (task === "") {
            alert("Task cannot be empty");
            return;
        }
        settodos([...todos,{no:count++,text:inputRef.current.value,display: ""}]);
        inputRef.current.value = '';
        localStorage.setItem("todos_count",count);
    } 
    useEffect(()=>{
        const storedTodos = JSON.parse(localStorage.getItem("todos")) || [];
        settodos(storedTodos);
        count= localStorage.getItem("todos_count") || 0;
    },[])
    useEffect(()=>{
        setTimeout(()=>{
            console.log(todos);
            localStorage.setItem("todos",JSON.stringify(todos));
        },100); 
    },[todos]);
 
  return (
    <div className='todo'>
        <div className="todo-header">To Do List</div>
        <div className="todo-add">
            <input ref={inputRef} type='text' placeholder='Enter task' className='todo-input'/>
            <div onClick={()=> {add()}} className="todo-addbtn">+</div>
        </div>
        <div className="todos-list">
            {todos.map((item,index)=>{
                return <Todoitems key={index} settodos={settodos} no={item.no} text={item.text} display={item.display}/>
            })}
        </div>
    </div>
  )
}

export default Todo;
