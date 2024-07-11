import { useState } from 'react';
import './App.css';
import Form from './Components/Form';
import Header from './Components/Header';

function App() {

  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);
  return (
    <div className="container">
      <div className='app-wrapper'>
        <div>
          <Header />
        </div>
        <div>
          <Form
            input={input}
            setInput={setInput}
            todos={todos}
            setTodos={setTodos} 
          />
        </div>
      </div>
    </div>
  );
}

export default App;
