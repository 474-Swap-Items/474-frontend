import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

export default function CreateUser(props) {
  const [open, setOpen] = React.useState(false);

  const handleSubmit = () => {
    let valuesStatus = true;
    const fields = [];
    fields.push(document.getElementById("name").value);
    fields.push(document.getElementById("username").value);
    fields.map((field) =>{
      if(field === ""){
        valuesStatus = false;
      }
    })
    if(valuesStatus == false){
        alert("you need to fill in all of the fields");
    }else{
        makeAndSend(fields);
        setOpen(false);
        props.rerenderParentCallback();
    }
    setOpen(false);
  };

  const makeAndSend = (values) => {
    let obj = {name: values[0], username: values[1], id: uuidv4()}
    axios.post('https://y1nkeqjzma.execute-api.us-east-1.amazonaws.com/prod', obj)
    .then((res) => {console.log(res)})
    .catch((err) =>{console.log(err)})
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
            id="name"
            label="Name"
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