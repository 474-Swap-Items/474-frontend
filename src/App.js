import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import { Switch } from 'react-router'
import './App.css';
import Homepage from './components/homepage/Homepage'
import Users from './components/users/Users'
import Posts from './components/posts/Posts'
import Login from './components/login/Login';
import NotFound from './components/nav/NotFound';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Login/>} />
          <Route path='/users' element={<Users/>} />
          <Route path='/posts' element={<Posts/>} />
          <Route path='/*' element={<NotFound/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
