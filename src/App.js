import './App.css';
import Header from './components/Header/Header.jsx';
import CreateToDo from './components/CreateToDo/CreateToDo';
import { useEffect,useState } from 'react';
import axios from 'axios';
import ToDoList from './components/ToDoList/ToDoList.jsx';

function App() {
  const [enumeration, setEnumeration] = useState([]);

  useEffect(() => {
    LoadToDoList();
  }, []);

  const LoadToDoList = async () => {
    axios
      .get('http://localhost:3001/items')
      .then((response) => setEnumeration(response.data))
      .catch((error) => console.log(error));
  };

  const PostToDoList = async (title) => {
    axios
      .post('http://localhost:3001/items', {
        id: enumeration.length + 1,
        task: title,
        complete: false,
      })
      .then((resp) => {
        console.log(resp.data);
        LoadToDoList();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="App">
      <div className="container">
        <Header />
        <CreateToDo PostToDoList={PostToDoList} />
        <ToDoList enumeration={enumeration} />
      </div>
    </div>
  );
}

export default App;
