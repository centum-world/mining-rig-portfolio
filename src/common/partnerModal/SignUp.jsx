import React, { useState, useEffect } from "react";
import "intl-tel-input/build/css/intlTelInput.css";
import intlTelInput from "intl-tel-input";
import "intl-tel-input/build/js/utils";
import "./Signup.css";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input"
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";

const SignUp = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [phoneInput, setPhoneInput] = useState(null);
  const [nomineePhoneInput, setNomineePhoneInput] = useState(null);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const [data, setData] = useState({
    reffered_id: "",
    name: "",
    lname: "",
    aadhar: "",
    phone: null,
    email: "",
    address: "",
    state: "",
    dob: "",
    nominee_name: "",
    nominee_aadhar: "",
    nominee_phone: null,
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
    const inputElementNominee = document.getElementById(
      "yourPhoneNumberInputNominee"
    );
    const phoneIti = intlTelInput(inputElement, {
      initialCountry: "in",
      separateDialCode: false,
    });

    const nomineePhoneIti = intlTelInput(inputElementNominee, {
      initialCountry: "in",
      separateDialCode: false,
    });


    setPhoneInput(phoneIti);
    setNomineePhoneInput(nomineePhoneIti);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value)
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

  const joiningDateChange = (date) => {
    setData((prevFormData) => ({
      ...prevFormData,
      dop: date,
    }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setData((prevFormData) => ({
      ...prevFormData,
      [name]: files[0],
    }));
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const referral  = data.name + Math.floor(Math.random() * 100000);
    const phoneSelectedCountryData = phoneInput.getSelectedCountryData();
    const nomineePhoneSelectedCountryData = nomineePhoneInput.getSelectedCountryData();

    // Extract country code and formatted phone number
    const phoneCountryCode = phoneSelectedCountryData.dialCode;
    const phoneFormattedNumber = phoneInput.getNumber();

    const nomineePhoneCountryCode = nomineePhoneSelectedCountryData.dialCode;
    const nomineePhoneFormattedNumber = nomineePhoneInput.getNumber();

    setData((prevFormData) => ({
      ...prevFormData,
      phone: phoneFormattedNumber,
      nominee_phone: nomineePhoneFormattedNumber,
    }));
    console.log(data, phoneFormattedNumber, nomineePhoneFormattedNumber, referral)


    const formData = new FormData();
    formData.append('p_reffered_id', data.reffered_id);
    formData.append('p_name', data.name);
    formData.append('p_lname', data.lname);
    formData.append('p_aadhar', data.aadhar);
    formData.append('p_phone',phoneFormattedNumber);
    formData.append('p_email', data.email);
    formData.append('p_address', data.address);
    formData.append('p_state', data.state);
    formData.append('p_dob',data.dob);
    formData.append('p_nominee_name', data.nominee_name);
    formData.append('p_nominee_aadhar', data.nominee_aadhar);
    formData.append('p_nominee_phone',nomineePhoneFormattedNumber);
    formData.append('p_dop',data.dop);
    formData.append('p_liquidity',data.liquidity);
    formData.append('terms', "12 Months");
    formData.append('p_userid', data.user_id);
    formData.append('p_password', data.password);
    formData.append('p_refferal_id',referral)
    formData.append('adhar_front_side', data.adhar_back_side);
    formData.append('adhar_back_side', data.adhar_back_side);
    formData.append('panCard',data.panCard);
    formData.append('role',data.role);

    try {
      const response = await fetch("http://localhost:3000/signup/partner-signup", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        console.log("Data submitted successfully!");
        localStorage("login",true);
        window.open("http://apps.centumworldrig.com/miningdashboard/home", "_blank");
      } else {
        console.error("Failed to submit data");
      }
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };

  return (
    <>
      <div>
        <Box>
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
              inputProps={{
                pattern: "[0-9]*",
              }}
            />
          </Box>
          <Box
            
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
                  value={data.dop}
                  name="dop"
                  onChange={joiningDateChange}
                />
              </DemoContainer>
            </LocalizationProvider>
          </Box>
          <Box
            
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

          <Box sx={{ m: 1, width: 300 }}>
            <FormControl fullWidth>
              {data.liquidity === "" ? (
                <InputLabel shrink={false} id="select-label">
                  Select liquidity
                </InputLabel>
              ) : (
                ""
              )}
              <Select
                labelId="select-label"
                id="demo-simple-select"
                value={data.liquidity}
                name="liquidity"
                onChange={handleChange}
              >
                <MenuItem value="" disabled>
                  Select one
                </MenuItem>
                <MenuItem value="1200000">12 Lakh</MenuItem>
                <MenuItem value="600000">6 Lakh</MenuItem>
                <MenuItem value="300000">3 Lakh</MenuItem>
                <MenuItem value="200000">2 Lakh</MenuItem>
                <MenuItem value="100000">1 Lakh</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box
            
            sx={{
              "& > :not(style)": { m: 1, width: "34ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField label="Outlined secondary" focused value="12 Months" />
          </Box>
          <Box
            
            sx={{
              "& > :not(style)": { m: 1, width: "34ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              label="Front aadhar image"
              focused
              type="file"
              accept="image/*"
              name="adhar_front_side"
              onChange={handleFileChange}
            />
          </Box>
          <Box
            
            sx={{
              "& > :not(style)": { m: 1, width: "34ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              label="Back aadhar image"
              focused
              type="file"
              accept="image/*"
              name="adhar_back_side"
              onChange={handleFileChange}
            />
          </Box>
          <Box
            
            sx={{
              "& > :not(style)": { m: 1, width: "34ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              label="Front aadhar image"
              focused
              type="file"
              accept="image/*"
              name="panCard"
              onChange={handleFileChange}
            />
          </Box>
          <Box
            
            sx={{
              "& > :not(style)": { m: 1, width: "34ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              label="User ID"
              value={data.user_id}
              name="user_id"
              onChange={handleChange}
            />
          </Box>
          <Box
            
            sx={{
              "& > :not(style)": { m: 1, width: "34ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                value={data.password}
                name="password"
                onChange={handleChange}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>
          </Box>

          <Box
            
            sx={{
              "& > :not(style)": { m: 1 },
            }}
            noValidate
            autoComplete="off"
          >
            <Button onClick={handleFormSubmit} variant="contained" sx={{ width: 300 }}>
              Submit
            </Button>
          </Box>
        </Box>
      </div>
    </>
  );
};

export default SignUp;
