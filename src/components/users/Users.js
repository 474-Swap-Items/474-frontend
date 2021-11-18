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
        axios.get('https://y1nkeqjzma.execute-api.us-east-1.amazonaws.com/prod') 
        .then(res => {
            setUserList(res.data);
            console.log(userList);
        })
        .catch((error) => {
          console.error(error)
        });
    }
      
    return (
        <div>
            <h1>Users Page!</h1>
            <CreateUser/>
            <div>
                <h2>Users</h2>
                <List>
                {userList.map((item) => {
                    return<ListItem>
                    <ListItemText
                        primary={item.username}
                        secondary={item.name}
                    />
                    </ListItem>
                })}
                </List>
            </div>
        </div>
    );
}