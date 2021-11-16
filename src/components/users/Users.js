import * as React from 'react'
import CreateUser from './CreateUser'
import { useState, useEffect } from 'react'
import axios from 'axios';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

export default function Users() {
    const [userList, setUserList] = useState([]);

    useEffect(()=>{
        getUsers();
    },[]);
    
    const getUsers = () => {
        // axios.get('https://uuu63lx2w7.execute-api.us-east-1.amazonaws.com/test/getitem') 
        // .then(res => {
        //     setPostList(res.data);
        //     console.log(postList);
        // })
        // .catch((error) => {
        //   console.error(error)
        // });
    }
      
    return (
        <div>
            <h1>Users Page!</h1>
            <CreateUser/>
        </div>
    );
}