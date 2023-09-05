import React, {useState} from 'react'
import "./CreateToDo.css"


const CreateToDo = () => {
  
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setTitle("");
  }

  console.log(title)
  return (
    <form onSubmit={handleSubmit} className="form">
        <input 
            type="text" 
            className="input" 
            placeholder="Enter a note"
            value ={title}
            onChange={(e) => setTitle(e.target.value)}
        />
        <button className="button">Add Task</button>
    </form>
  )
}

export default CreateToDo
