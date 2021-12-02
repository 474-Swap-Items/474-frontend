import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Homepage from './components/homepage/Homepage'
import Users from './components/users/Users'
import Posts from './components/posts/Posts'
import AppBar from './components/nav/AppBar'
import Login from './components/login/Login';


function App() {
  const [isAunthenticated, setIdAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  // const changeUser = () =>{

  // }

  const authInfo = {
    isAunthenticated: isAunthenticated,
    user: user
  }
  return (
    <div className="App">
      <Router>
        <nav>
          <ul className="nav-bar">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/users">Users</Link></li>
            <li><Link to="/posts">Posts</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path='/' element={<Login auth={authInfo}/>} />
          <Route path='/users' element={<Users auth={authInfo}/>} />
          <Route path='/posts' element={<Posts auth={authInfo}/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
