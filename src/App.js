import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Homepage from './components/homepage/Homepage'
import Users from './components/users/Users'
import Posts from './components/posts/Posts'
import AppBar from './components/nav/AppBar'
import Login from './components/login/Login';

function App() {
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
          <Route path='/' element={<Login/>} />
          <Route path='/users' element={<Users/>} />
          <Route path='/posts' element={<Posts/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
