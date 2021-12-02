import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
// import axios from 'axios';
// import { v4 as uuidv4 } from 'uuid';
import {Auth} from 'aws-amplify'

export default function CreateUser(props) {
  const [open, setOpen] = React.useState(false);

  const handleSubmit = () => {
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
        // props.rerenderParentCallback();
    }
  };

  const makeAndSend = async (values) => {
    try{
      const daResponse = await Auth.signUp({
        username: values[0],
        password: values[1],
        attributes: {
          email: values[2]
        }
      })  
    }catch(error){
      console.log(error);
    }
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Create User
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Create User</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To create a user, please add a username and and email address.
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
                    <TextField
            margin="dense"
            id="email"
            label="Email"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}