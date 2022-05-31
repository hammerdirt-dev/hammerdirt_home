import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {ITransModal, ITextFieldProps} from "./DataStructures";


interface IFormModal extends ITextFieldProps, ITransModal {}

export default function FormDialog(props : IFormModal) {


  const [email, setEmail] = React.useState();
  const [password, setPassword] = React.useState();

  const not_ready: boolean = true

  const handleClose = () => {
    props.closeDialog();
  };

  function retrieveVals(e:any){
    e.preventDefault();
    const data = {"email": email, "password": password};
    props.handleSubmit(data);
  }

  return (
    <div>
      <Dialog open={props.open} >
        <DialogTitle>{props.modalContent.title} </DialogTitle>
        <DialogContent>
          <DialogContentText> {props.modalContent.message} </DialogContentText>
          <form onSubmit={retrieveVals} id="login-form">
            <TextField disabled={not_ready} {...props.emailField} onChange={(e: any) => setEmail(e.target.value)}/>
            <TextField disabled={not_ready}{...props.passWordField} onChange={(e: any) => setPassword(e.target.value)}/>
          </form>
        </DialogContent>
        <DialogActions>
          <Button type="submit" form="login-form" id="log-in-form-submit" disabled={not_ready}>Login</Button>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
