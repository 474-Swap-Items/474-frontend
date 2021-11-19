import * as React from 'react'
import CreatePost from './CreatePost'
import { useState, useEffect } from 'react'
import axios from 'axios';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';


export default function Posts() {
    const [postList, setPostList] = useState([]);
    const [lastID, setLastID] = useState();
    useEffect(()=>{
        getPosts();
    },[]);
    
    const getPosts = () => {
        axios.get('https://v1sdueurx1.execute-api.us-east-1.amazonaws.com/initial/') 
        .then(res => {
            setPostList(res.data);
            setLastID(postList.length);
            console.log(res.data);

        })
        .catch((error) => {
          console.error(error)
        });
    }
    return (
        <div>
            <h1>Posts Page!</h1>
            <CreatePost data = {lastID}/>
            <div>
                <h2>Posts</h2>
                <List>
                {postList.map((item) => {
                    return<ListItem>
                    <ListItemText
                        primary={item.title}
                        secondary={item.type}
                    />
                    </ListItem>
                })}
                </List>
            </div>
        </div>
    );
}