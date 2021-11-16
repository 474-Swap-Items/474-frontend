import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function CreatePost() {
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
    fields.push(document.getElementById("description").value);
    fields.push(document.getElementById("price").value);
    fields.push(document.getElementById("image_url").value);
    fields.push(document.getElementById("email").value);
    fields.map(field =>{
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
      }else{
        alert("Price must be a number")
      }
    }}
  }

  const makeAndSend = (values) =>{
    let obj = {title: values[0], description: values[1],price: values[2], image_url: values[3],email: values[4]}
    //axios send
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
            id="description"
            label="Description"
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
            id="image_url"
            label="Image Link"
            type="image_url"
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