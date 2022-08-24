import React from "react";
// import { useState} from "react";
import ToDoItemStyle from './ToDoItem.module.css';
const ToDoItem = (props) => {
  let { id, name, isDone, handleClick} = props;
  
  return (
    <li key={id} className={ToDoItemStyle.li}>
      <input type="checkbox" />
      <div>{name}</div>
      <button onClick={() => handleClick(id)} className={ToDoItemStyle.Delbtn}>
        Delete
      </button>
    </li>
  );
};

export default ToDoItem;
