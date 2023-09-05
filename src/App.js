import './App.css';
import Header from './components/Header/Header.jsx';
import CreateToDo from './components/CreateToDo/CreateToDo';
import { useEffect,useState } from 'react';


function App() {

  const [toDoList, setToDoList] = useState([])

  return (
    <div className="App">
      <div className="container">
          <Header />
          <CreateToDo />
      </div>
    </div>
  );
}

export default App;
