import React, { useState } from 'react';
import './CreateToDo.css';

const CreateToDo = ({ PostToDoList }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    PostToDoList(title); 
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        className="input"
        placeholder="Enter a note"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit" className="button">
        Add Task
      </button>
    </form>
  );
};

export default CreateToDo;