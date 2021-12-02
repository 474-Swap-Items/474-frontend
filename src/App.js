import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import { Switch } from 'react-router'
import Homepage from './components/homepage/Homepage'
import Users from './components/users/Users'
import Posts from './components/posts/Posts'
import Login from './components/login/Login';
import NotFound from './components/nav/NotFound';



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
        <Routes>
          <Route path='/' element={<Login auth={authInfo}/>} />
          <Route path='/users' element={<Users auth={authInfo}/>} />
          <Route path='/posts' element={<Posts auth={authInfo}/>} />
          <Route path='/' element={<Homepage/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/users' element={<Users/>} />
          <Route path='/posts' element={<Posts/>} />
          <Route path='/*' element={<NotFound/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
