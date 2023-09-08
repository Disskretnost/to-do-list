import React from 'react';
import "./ToDoItem.css"
import { LuEdit } from 'react-icons/lu';
import {RiDeleteBin6Line} from 'react-icons/ri';

const ToDoItem = ({ todo, DeleteToDoItem, EditToDoForm}) => {
  return (
    <div className='ToDoItem'>
      <p className='ToDoItem_-text'>{todo.task}</p>
      <div className="icons">
        <LuEdit 
          className='icons__item' 
          onClick={() => EditToDoForm(todo.id)}/>
        <RiDeleteBin6Line 
          className='icons__item' 
          onClick={() => DeleteToDoItem(todo.id)}/>
      </div>
    </div>
  );
}

export default ToDoItem;