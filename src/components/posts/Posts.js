import * as React from 'react'
import CreatePost from './CreatePost'
import { useState, useEffect } from 'react'
import axios from 'axios';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import {Link} from 'react-router-dom';


export default function Posts() {
    const [postList, setPostList] = useState([]);

    useEffect(()=>{
        getPosts();
        console.log(postList);
    },[]);
    
    const getPosts = () => {
        axios.get('https://4g9ijghb9j.execute-api.us-east-1.amazonaws.com/prod') 
        .then(res => {
            console.log(res.data)
            setPostList(res.data);
        })
        .catch((error) => {
          console.error(error)
        });
    }
      
    return (
        <div>
            <h1>Posts Page!</h1>
            <CreatePost/>
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