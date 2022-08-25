import React from "react";
import { useState } from "react";
import ToDoItem from "../ToDoItem/index";
import style from "./ToDoList.module.css"
const ToDoList = () => {
  const todo = [
    {
      id: "1",
      name: "A",
      isDone: false,
    },
    {
      id: "2",
      name: "B",
      isDone: false,
    },
    {
      id: "3",
      name: "C",
      isDone: false,
    },
    {
      id: "4",
      name: "D",
      isDone: false,
    },
    {
      id: "5",
      name: "E",
      isDone: false,
    },
  ];
  const [list, setList] = useState(todo);
  let handleClick = (id) => {
    const newList = list.filter((item) => item.id != id);
    setList(newList);
    console.log(newList);
  };

  return (
    <ul className={style.ulStyle}>
      {list.map((item) => (
        <ToDoItem id = {item.id} key={item.id} name={item.name} isDone={item.isDone} handleClick={handleClick} />
      ))}
    </ul>
  );
};

export default ToDoList;
