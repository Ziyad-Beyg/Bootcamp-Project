import { useState } from "react";
import logo from "../assets/logo.png";
import signIn from "../assets/SigninIcon.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../app.css";
import {
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import * as EmailValidator from "email-validator";

const LoginForm = () => {
  const [formState, setFormState] = useState("login");
  const [value, setValues] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  // const location = useLocation()
  const navigate = useNavigate();

  const handleChange = (e) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setEmailError("");
    setPasswordError("");
  };

  const handleSubmit = async () => {
    if (!EmailValidator.validate(value.email)) {
      setEmailError("Please enter a valid email address");
      return;
    }
    // const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    const passwordRegex = /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[\W_]).{8,}$/;
    if (!passwordRegex.test(value.password)) {
      setPasswordError(
        'Password must be at least 8 characters long and contain at least one letter and one number.'
      );
    } else {
      // Password is valid, do something with it
      console.log('Valid password:', value.password);
    }
    // if (value.password.length < 8) {
    //   setPasswordError('Password should be at least 8 characters long.');
    //   console.log("Nae chala");

    //   // return
    // } else {
    //   // Password is valid, do something with it
    //   console.log('Valid password:', value.password);
    //   console.log("chal gaya");
    // }
    // try {
    //   const {
    //     status,
    //     data: { token, refreshToken },
    //   } = await axios.post(`http://localhost:8080/${formState}`, value);
    //   if (status === 201) {
    //     localStorage.setItem("Token", token);
    //     localStorage.setItem("RefreshToken", refreshToken);
    //     location.replace("/");
    //     //  navigate("/");
    //   }
    // } catch (err) {
    //   alert(err.message);
    // }
  };
  return (
    <main className="FormComponent" style={{ width: "50%", zIndex: "1111" }}>
      <section
        style={{
          backgroundColor: "white",
          borderRadius: "20px",
          boxShadow: "0px 5px 8px rgba(0, 0, 0, 0.2)",
          padding: "30px",
        }}
      >
        <img
          src={logo}
          alt="Brand Logo"
          width={120}
          height={100}
          style={{ objectFit: "contain" }}
        />
        <p style={{ margin: "15px 0px", color: "#000", opacity: "0.5" }}>
          Welcome back!
        </p>
        <section style={{ backgroundColor: "white" }}>
          <h2 style={{ fontSize: "34px" }}>Sign In</h2>
          <div style={{ margin: "25px 0px" }}>
            <TextField
              name="email"
              id="standard-controlled"
              label="Email"
              value={value.email}
              onChange={handleChange}
              error={!!emailError}
              helperText={emailError}
              sx={{
                marginTop: "10px",
                borderRadius: "10px",
                outline: "none",
                border: "none",
                color: "black",
                width: "100%",
                fontSize: "14px",
              }}
            />
          </div>

          <div style={{ margin: "25px 0px" }}>
            <FormControl sx={{ width: "100%" }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                name="password"
                type={showPassword ? "text" : "password"}
                sx={{
                  // backgroundColor: "#edf5ef",
                  outline: "none",
                  border: "none",
                  color: "black",
                  width: "100%",
                  fontSize: "14px",
                }}
                value={value.password}
                onChange={handleChange}
                error={!!passwordError}
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
              {passwordError && <FormHelperText error>{passwordError}</FormHelperText>}
            </FormControl>

            <p
              style={{
                fontSize: "12px",
                color: "silver",
                padding: "10px 10px",
              }}
            >
              don't have an account?{" "}
              <Link to={"/register"} style={{ textDecoration: "none" }}>
                <span style={{ color: "#50A060", fontWeight: "bold" }}>
                  SIGN UP
                </span>
              </Link>
            </p>
            <button
              style={{
                backgroundColor: "#50A060",
                padding: "10px 20px",
                outline: "none",
                border: "none",
                borderRadius: "25px",
                fontSize: "18px",
                fontWeight: "bold",
                letterSpacing: "1px",
                display: "flex",
                alignItems: "center",
                color: "white",
                margin: "10px auto",
              }}
              onClick={handleSubmit}
            >
              Login &nbsp;
              <img
                src={signIn}
                alt="Sign In Icon"
                width={25}
                height={25}
                style={{ objectFit: "contain" }}
              />
            </button>
          </div>
        </section>
      </section>
    </main>
  );
};

export default LoginForm;
