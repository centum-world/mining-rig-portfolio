import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";
import LoginModal from "./LoginModal";
import SignUp from "./SignUp";

const Modalpartner = ({partnerVisible, handleClose}) => {
  const [loginPage, setLoginPage] = useState(true);
   const signup = () =>{
    setLoginPage(false)
   }

   const login = () =>{
    setLoginPage(true);
   }


  return (
    <>
      <Dialog
        open={partnerVisible}
        onClose={handleClose}
        PaperProps={{
          component: "form",
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const email = formJson.email;
            console.log(email);
            handleClose();
          },
        }}
      >
        <DialogTitle>WELCOME TO CENTUM WORLD</DialogTitle>
        <DialogContent>
          <DialogContentText>
            GPU MINING RIG 
          </DialogContentText>
          {loginPage?<LoginModal/>: <SignUp/>}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          {loginPage?<Button onClick={signup}>Create new account</Button>:
          <Button onClick={login}>Aready have an account</Button>}
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Modalpartner;
