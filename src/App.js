import './App.css';
import Header from './components/Header/Header.jsx';
import CreateToDo from './components/CreateToDo/CreateToDo';
import { useEffect,useState } from 'react';
import axios from 'axios';
import ToDoList from './components/ToDoList/ToDoList.jsx';
import {v4 as uuidv4} from 'uuid';


function App() {
  const [enumeration, setEnumeration] = useState([]);

  useEffect(() => {
    LoadToDoList();
  }, []);

  async function LoadToDoList() {
    try {
      const response = await axios.get('http://localhost:3001/items');
      setEnumeration(response.data);
    } catch (error) {
      console.error("Ошибка при загрузке данных:", error);
    }
  }
  
  async function PostToDoList(title) {
    try {
      const resp = await axios.post('http://localhost:3001/items', {
        id: uuidv4(),
        task: title,
        completed: false,
        isEditing: false
      });
      console.log(resp.data);
      LoadToDoList();
    } catch (error) {
      console.error("Ошибка при добавлении элемента:", error);
    }
  }
  
  async function DeleteToDoItem(id) {
    try {
      await axios.delete(`http://localhost:3001/items/${id}`);
      LoadToDoList();
    } catch (error) {
      console.error("Ошибка при удалении элемента:", error);
    }
  }

  async function UpdateToDoItem(id, updatedData) {
    try {
      const resp = await axios.put(`http://localhost:3001/items/${id}`, updatedData);
      console.log(resp.data);
      LoadToDoList(); // Если вы хотите обновить список после изменения элемента
    } catch (error) {
      console.error("Ошибка при обновлении элемента:", error);
    }
  }

  const EditToDoForm = id => {
    setEnumeration(enumeration.map( todo => todo.id === id ? {...todo, isEditing: !todo.isEditing} :todo))
  }

  
  return (
    <div className="App">
      <div className="container">
        <Header />
        <CreateToDo PostToDoList={PostToDoList} />
        <ToDoList 
          enumeration = {enumeration} 
          DeleteToDoItem = {DeleteToDoItem} 
          EditToDoForm = {EditToDoForm}
          UpdateToDoItem = {UpdateToDoItem}/>
      </div>
    </div>
  );
}

export default App;
