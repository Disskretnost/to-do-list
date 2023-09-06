import React from 'react';
import "./ToDoItem.css"

const ToDoItem = ({ todo }) => {
  return (
    <div className='ToDoItem'>
      {todo.task}
    </div>
  );
}

export default ToDoItem;