import * as React from 'react';
import "../../App.css"
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {Auth} from 'aws-amplify'
import { useHistory } from 'react-router-dom';
import { useAuthContext } from '../../contexts/AuthContext';
import { useUserContext } from '../../contexts/UserContext';
import { Box } from '@mui/system';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

export default function Signup() {  
    let history = useHistory();
    const { user, setUser } = useUserContext();
    const { setAuth } = useAuthContext();

    const createUserInDynamo = async () => {
        console.log("help");
        let valuesStatus = true;
        const fields = [];
        fields.push(document.getElementById("username").value);
        fields.push(document.getElementById("password").value);
        fields.push(document.getElementById("email").value);
        fields.map((field) =>{
          if(field === ""){
            valuesStatus = false;
          }
        })
        if(valuesStatus == false){
            alert("you need to fill in all of the fields");
        }else{
            makeAndSend(fields);
        }
        goToLogin();
    };

    const makeAndSend = (values) => {
        let obj = {name: values[0], username: values[1], email: values[2], id: uuidv4()}
        axios.post('https://y1nkeqjzma.execute-api.us-east-1.amazonaws.com/prod', obj)
            .then((res) => {console.log("Created user in dynamo: " + res)})
            .catch((err) =>{console.log(err)})
    }

    const handleSignup = async () => {
        const userNamebox = document.getElementById("username");
        const passwordBox = document.getElementById("password");
        const emailBox = document.getElementById("email");
        try{
            const user = await Auth.signUp(userNamebox.value, passwordBox.value, emailBox.value);
            createUserInDynamo();
            console.log(user);
        }catch(error){
            alert(error);
            console.log("Signup failed:" + error);
        }
    }

    const goToLogin = () => {
        history.push("/login");
    }

    return (
        <div>
            <Dialog open={true} onClose={console.log("")}>
                <DialogTitle>Sign up</DialogTitle>
                <DialogContent>
                <DialogContentText>
                    Please enter your a username, email and password.
                </DialogContentText>
                <TextField
                    autoFocus
                    margin="dense"
                    id="username"
                    label="Username"
                    type="username"
                    fullWidth
                    variant="standard"
                />
                <TextField
                    margin="dense"
                    id="email"
                    label="Email"
                    type="email"
                    fullWidth
                    variant="standard"
                />
                <TextField
                    margin="dense"
                    id="password"
                    label="Password"
                    type="password"
                    fullWidth
                    variant="standard"
                />
                </DialogContent>
                <DialogActions>
                <div className="buttons">
                    <Box sx={{ m: "0.2rem" }}>
                        <Button variant="outlined" onClick={goToLogin} >Log in</Button>
                    </Box>
                    <Box sx={{ m: "0.2rem" }}>
                        <Button variant="contained" onClick={handleSignup}>Sign up</Button>
                    </Box>
                </div>
                </DialogActions>
            </Dialog>
        </div>
    );
}