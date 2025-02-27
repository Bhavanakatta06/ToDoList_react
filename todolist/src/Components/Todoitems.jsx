import React from 'react'
import './CSS/TodoItem.css'
import tick from './Assets/tick.png'
import nontick from './Assets/nontick.png'
import delete_icon from './Assets/delete.png'

const Todoitems = ({no,display,text,settodos}) => {

  const deletetodo=(no)=>{
    let data = JSON.parse(localStorage.getItem("todos"));
    data = data.filter((todo) => todo.no !== no);
    settodos(data);
  }

  const toggle =(no)=>{
    let data = JSON.parse(localStorage.getItem("todos"));
    for(let i = 0;i < data.length;i++){
      if(data[i].no === no){
        if(data[i].display === ""){
          data[i].display = "line-through";
        }
        else{
          data[i].display = "";
        }
        break;
      }
    }
    settodos(data);
  }
  return (
    <div className='todoitems'>
      <div className={`todoitems-container ${display}`} onClick={()=>{ toggle(no) }}> 
        {display === ""?<img className='nontick_icon' src={nontick} alt = ""/>:<img className='tick_icon' src={tick} alt = ""/>}
        <div className="todoitems-text">{text}</div>
      </div>
      <img onClick={()=>{deletetodo(no)}} className='del_icon' src={delete_icon} alt=''/>
    </div>
  )
}

export default Todoitems;
