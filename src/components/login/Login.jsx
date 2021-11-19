import * as React from 'react';
import "../../App.css"
import {useNavigate} from "react-router-dom";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function Login() {  
    const navigate = useNavigate();

    const handleLogin = () => {
      const userNamebox = document.getElementById("username");
      const passwordBox = document.getElementById("password");
      navigate ('/posts');
    };
    const handleSignup = () => {
        navigate ('/users');
    }
    return (
        <div>
            <Dialog open={true} onClose={console.log("")}>
                <DialogTitle>Log in</DialogTitle>
                <DialogContent>
                <DialogContentText>
                    Please enter your username and password.
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
                    id="password"
                    label="Password"
                    type="email"
                    fullWidth
                    variant="standard"
                />
                </DialogContent>
                <DialogActions>
                <div className="buttons">
                    <Button onClick={handleSignup}>Sign up</Button>
                    <Button onClick={handleLogin}>Log in</Button>
                </div>
                </DialogActions>
            </Dialog>
        </div>
    );
}