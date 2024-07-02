import logo from './logo.svg';
import './App.css';
import { Route,Routes } from 'react-router-dom';
import Home from './Components/Home';
import NavBar from './Components/NavBar';
import Project from './Components/Project';
import About from './Components/About';
import Contact from './Components/Contact';

function App() {
  return (
    <div className="App">
      {/* <NavBar/> */}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/projects' element={<Project/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </div>
  );
}

export default App;
