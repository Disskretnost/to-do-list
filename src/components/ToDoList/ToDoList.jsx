import React from 'react';
import ToDoItem from '../ToDoItem/ToDoItem';

const ToDoList = ({ enumeration }) => {
  return (
    <div>
      {enumeration.map(item => <ToDoItem key={item.id} todo={item} />)}
    </div>
  );
}

export default ToDoList;
