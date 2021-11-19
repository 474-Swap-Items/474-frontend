import * as React from 'react'
import CreateUser from './CreateUser'
import { useState, useEffect } from 'react'
import axios from 'axios';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

export default function Users() {
    const [userList, setUserList] = useState([]);
    const [lastID, setLastID] = useState();
    const [callback, setCallback] = useState(1);

    useEffect(()=>{
        getUsers();
        setLastID(userList.length)
    },[callback]);
    
    const getUsers = () => {
        axios.get('https://63pqdmx904.execute-api.us-east-1.amazonaws.com/production') 
        .then(res => {
            setUserList(res.data);
            console.log(res.data);
        })
        .catch((error) => {
          console.error(error)
        });
    }
      
    const rerenderParentCallback = () => {
        getUsers();
        setCallback(callback+1);
        console.log("callback");
    }

    return (
        <div>
            <h1>Users Page!</h1>
            <CreateUser rerenderParentCallback={rerenderParentCallback} data={lastID}/>
            <div>
                <h2>Users</h2>
                {userList.map((item) => {
                    return<Card>
                        <CardContent >
                        <div>
                            <h2>{item.name}</h2>
                            <h4>{item.username}</h4>
                        </div>
                        </CardContent>
                    </Card>
                })}
            </div>
        </div>
    );
}
