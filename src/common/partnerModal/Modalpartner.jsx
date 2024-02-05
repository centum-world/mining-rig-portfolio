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
import { useSelector } from "react-redux";
import authGif from "../../assets/png/Data5.gif";
import CloseIcon from "@mui/icons-material/Close";

const Modalpartner = ({ partnerVisible, handleClose }) => {
  const { selectedColor } = useSelector((state) => state.colors);

  const [loginPage, setLoginPage] = useState(true);
  const signup = () => {
    setLoginPage(false);
  };

  const login = () => {
    setLoginPage(true);
  };

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
        <div className=" flex justify-center items-center w-full h-auto">
          <img
            src={authGif}
            alt="authGif"
            className="object-cover h-48"
          />

          <div
            style={{ color: selectedColor }}
            className="absolute m-1 top-0 right-0 cursor-pointer"
            onClick={handleClose}
          >
            <CloseIcon />
          </div>
        </div>
        <DialogTitle
          className="text-center text-4xl font-roboto "
          style={{
            color: selectedColor,
            fontSize: "1.2em",
            fontWeight: 700,
            padding: "0",
          }}
        >
          Don't miss the chance!
        </DialogTitle>
        <DialogContent>{loginPage ? <LoginModal /> : <SignUp />}</DialogContent>
        <DialogActions>
          {loginPage ? (
            <Button onClick={signup}>Create new account</Button>
          ) : (
            <Button onClick={login}>Aready have an account</Button>
          )}
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Modalpartner;
