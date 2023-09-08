import React from 'react';
import ToDoItem from '../ToDoItem/ToDoItem';
import EditToDo from '../EditToDo/EditToDo';

const ToDoList = ({ enumeration, DeleteToDoItem, EditToDoForm,  UpdateToDoItem }) => {
  return (
    <div>
      {enumeration.map(item => (
        item.isEditing ? (
          <EditToDo 
            key = {item.id} 
            item = {item} 
            EditToDoForm = {EditToDoForm}  
            UpdateToDoItem = { UpdateToDoItem}
          />
        
        ) : (
          <ToDoItem 
            key={item.id} 
            todo={item} 
            DeleteToDoItem={DeleteToDoItem} 
            EditToDoForm={EditToDoForm}
          />
        )
      ))}
    </div>
  );
}

export default ToDoList;