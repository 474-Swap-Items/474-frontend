import * as React from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';


export default function CreatePost(props) {

  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    let valuesStatus = true;
    const fields = [];
    fields.push(document.getElementById("title").value);
    fields.push(document.getElementById("owner").value);
    fields.push(document.getElementById("price").value);
    fields.push(document.getElementById("type").value);
    fields.map((field) =>{
      if(field === ""){
        valuesStatus = false;
      }
    })
    {if(valuesStatus == false){
        alert("you need to fill in all of the fields");
    }else{
      const pattern = /\d/g;
      if(pattern.test(fields[2])){
        makeAndSend(fields);
        setOpen(false);
        props.rerenderParentCallback();
      }else{
        alert("Price must be a number")
      }
    }}
  }

  const makeAndSend = (values) =>{
    let obj = {title: values[0], owner: values[1],price: values[2], type: values[3],id: uuidv4()}
    axios.post('https://q9nbo4wqqd.execute-api.us-east-1.amazonaws.com/production', obj)
    .then((res) => {console.log(res)})
    .catch((err) => {console.log(err)})
  }

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Create Post
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Create Post</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To create a post, please submit details such as a title, description, price, image link and email.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="title"
            label="Title"
            type="title"
            fullWidth
            variant="standard"
          />
          <TextField
            margin="dense"
            id="owner"
            label="Owner"
            type="description"
            fullWidth
            variant="standard"
          />
          <TextField
            margin="dense"
            id="price"
            label="Price"
            type="price"
            fullWidth
            variant="standard"
          />
          <TextField
            margin="dense"
            id="type"
            label="Type"
            type="image_url"
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
