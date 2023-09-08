import React from 'react'
import { useState } from 'react';
import "./EditToDo.css"

const EditToDo = ({item, EditToDoForm,  UpdateToDoItem}) => {
    const [title, setTitle] = useState(item.task);
    console.log(title)

    const updatedData = {
        task: title,
        completed: true,
        isEditing: false,
      };

    const handleSubmit = (e) => {
      e.preventDefault();
      UpdateToDoItem(item.id, updatedData)
      setTitle('');
    };
  
    return (
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          className="input"
          placeholder="Update task"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type="submit" className="button">
          Update task
        </button>
      </form>
    );
}

export default EditToDo
