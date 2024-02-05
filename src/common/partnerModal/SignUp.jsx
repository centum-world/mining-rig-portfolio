import React, { useState, useEffect } from "react";
import "intl-tel-input/build/css/intlTelInput.css";
import intlTelInput from "intl-tel-input";
import "intl-tel-input/build/js/utils";
import "./Signup.css";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";

import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const SignUp = () => {
  const [data, setData] = useState({
    reffered_id: "",
    name: "",
    lname: "",
    aadhar: "",
    phone: "",
    email: "",
    address: "",
    state: "",
    dob: "",
    nominee_name: "",
    nominee_aadhar: "",
    nominee_phone: "",
    dop: "",
    liquidity: "",
    user_id: "",
    password: "",
    refferal_id: "",
    adhar_front_side: null,
    adhar_back_side: null,
    panCard: null,
    role: "",
  });

  useEffect(() => {
    const inputElement = document.getElementById("yourPhoneNumberInput");
    const inputElementNominee = document.getElementById("yourPhoneNumberInputNominee");
    intlTelInput(inputElement, {
      initialCountry: "in",
    });

    intlTelInput(inputElementNominee, {
      initialCountry: "in",
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleDateChange = (date) => {
    setData((prevFormData) => ({
      ...prevFormData,
      dob: date,
    }));
  };

  const joiningDateChange = (date) =>{
    setData((prevFormData) => ({
      ...prevFormData,
      dop: date,
    }));
  }

console.log(data)

  return (
    <>
      <div>
        <Box sx={{ m: 1, width: 300 }}>
          <FormControl fullWidth>
            {data.role === "" ? (
              <InputLabel shrink={false} id="select-label">
                Select referral id
              </InputLabel>
            ) : (
              ""
            )}
            <Select
              labelId="select-label"
              id="demo-simple-select"
              value={data.role}
              name="role"
              onChange={handleChange}
            >
              <MenuItem value="" disabled>
                Select one
              </MenuItem>
              <MenuItem value="MEMBER">Member</MenuItem>
              <MenuItem value="FRANCHISE">Franchise</MenuItem>
              <MenuItem value="BMM">BMM</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "34ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-basic"
            placeholder="Referral ID"
            value={data.reffered_id}
            name="reffered_id"
            onChange={handleChange}
          />
        </Box>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "34ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-basic"
            placeholder="First name"
            value={data.name}
            name="name"
            onChange={handleChange}
          />
        </Box>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "34ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-basic"
            placeholder="Last name"
            value={data.lname}
            name="lname"
            onChange={handleChange}
          />
        </Box>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "34ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-basic"
            placeholder="Email ID"
            type="email"
            value={data.email}
            name="email"
            onChange={handleChange}
          />
        </Box>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "34ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            placeholder="10 digit"
            value={data.phone}
            name="phone"
            type="tel"
            id="yourPhoneNumberInput"
            onChange={handleChange}
          />
        </Box>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "34ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            placeholder="12 digit aadhar no."
            value={data.aadhar}
            name="aadhar"
            onChange={handleChange}
          />
        </Box>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "34ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            multiline
            placeholder="Enter your address"
            value={data.address}
            name="address"
            onChange={handleChange}
          />
        </Box>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "34ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            placeholder="State name"
            value={data.state}
            name="state"
            onChange={handleChange}
          />
        </Box>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "34ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DatePicker"]}>
              <DatePicker
                label="Date of birth"
                sx={{ width: "300px" }}
                value={data.dob}
                name="dob"
                onChange={handleDateChange}
              />
            </DemoContainer>
          </LocalizationProvider>
        </Box>

        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "34ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DatePicker"]}>
              <DatePicker
                label="Date of joining"
                sx={{ width: "300px" }}
                value={data.dob}
                name="dop"
                onChange={joiningDateChange}
              />
            </DemoContainer>
          </LocalizationProvider>
        </Box>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "34ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            placeholder="Nominee full name"
            value={data.nominee_name}
            name="nominee_name"
            onChange={handleChange}
          />
        </Box>

        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "34ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            placeholder="Nominee aadhar"
            value={data.nominee_aadhar}
            name="nominee_aadhar"
            onChange={handleChange}
          />
        </Box>

        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "34ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            placeholder="Nominee phone no"
            value={data.nominee_phone}
            name="nominee_phone"
            type="tel"
            id="yourPhoneNumberInputNominee"
            onChange={handleChange}
          />
        </Box>
      </div>
    </>
  );
};

export default SignUp;
