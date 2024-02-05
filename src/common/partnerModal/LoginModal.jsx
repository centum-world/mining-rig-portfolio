import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import axios from "axios";
import { useSelector } from "react-redux";
import baseUrl from "../../baseUrl";
const apiurl = baseUrl.apiUrl;

const LoginModal = () => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const { selectedColor } = useSelector((state) => state.colors);

  const handleLogin = async () => {
    console.log(apiurl);

    try {
      const requestData = {
        p_userid: userId,
        p_password: password,
      };

      const response = await axios.post(
        `${apiurl}/mining/mining-partner-login`,
        requestData
      );
      const newWindows = window.open(
        "http://apps.centumworldrig.com/miningdashboard/home",
        "_blank"
      );
      newWindows.postMessage(
        { key: "login", value: true },
        "https://apps.centumworldrig.com/miningdashboard/home"
      );
    } catch (error) {
      console.error("Error during login", error);
    }
  };

  return (
    <div className="max-w-xs space-y-4 mx-auto p-4">
      <TextField
        id="outlined-basic"
        label="User ID"
        variant="outlined"
        value={userId}
        name="user_id"
        fullWidth
        className="mb-4"
        onChange={(e) => setUserId(e.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="Password"
        variant="outlined"
        type="password"
        value={password}
        name="password"
        fullWidth
        className="mb-4"
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button
        style={{ background: selectedColor }}
        variant="contained"
        color="primary"
        onClick={handleLogin}
        fullWidth
      >
        Login
      </Button>
    </div>
  );
};

export default LoginModal;
