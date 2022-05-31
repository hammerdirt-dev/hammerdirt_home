import React from "react";
import './App.css';
import PrimarySearchAppBar from "./AppBar";
import Tabs from "./Tabs"
import Footer from "./Footer"
import { ThemeProvider } from '@mui/material/styles';
import FormDialog from "./FormDialog";
import { textAreaProps, themeOptions, loginContent} from "./appConfig";



export function handleSubmit(loginData: {"email":any, "password":any}) {

    alert(loginData.password)
    alert(loginData.email)


}

function App() {
  const [aLoginDialog, setLoginDialog] = React.useState(false);
  const handleOpenDialog = () => setLoginDialog(true);
  const handleCloseDialog = () => setLoginDialog(false);


  return (
      <ThemeProvider theme={themeOptions}>
        <FormDialog handleSubmit={handleSubmit} open={aLoginDialog} closeDialog={handleCloseDialog} modalContent={loginContent} {...textAreaProps}>
        </FormDialog>
        <div>
            <PrimarySearchAppBar logged={aLoginDialog} handleClick={handleOpenDialog}/>
            <Tabs />
            <Footer />
        </div>

      </ThemeProvider>)
}

export default App;
