import './App.css'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './Components/Home';
import Login from './Components/Login';
import CreatePost from './Components/CreatePost';
import { useState } from 'react';
import { signOut } from 'firebase/auth'
import {auth} from './Firebase/Firebase'

function App() {
  const [isAuth, setIsAuth] = useState(false)
  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear()
      setIsAuth(false)
      window.location.pathname='/login';
    })
  }
return (
  <div className="App">
    <nav>
      <Link to='/'>Home</Link>
      {!isAuth ? (<Link to='/login'>Login</Link>) : (<>
      <Link to='/createPost'>Post</Link>
        <button onClick={signUserOut}>Logout</button>
      </>)}
    </nav>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/login' element={<Login setIsAuth={setIsAuth} />} />
      <Route path='/createPost' element={<CreatePost isAuth={isAuth}/>} />
    </Routes>
  </div>
);
}

export default App;
