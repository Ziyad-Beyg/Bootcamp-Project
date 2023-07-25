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
import { toast } from "react-toastify";

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

  const notify = (text, status) =>
    status == "login"
      ? toast.success(`${text}`, {
          position: "bottom-left",
          autoClose: 2500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        })
      : toast.error(`${text}`, {
          position: "bottom-left",
          autoClose: 2500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });

  const handleChange = (e) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setEmailError("");
    setPasswordError("");
  };

  const handleSubmit = async () => {
    if (value.email.trim() === "") {
      setEmailError("Email can not be empty.");
      return;
    } else if (!EmailValidator.validate(value.email)) {
      setEmailError("Please enter a valid email address");
      return;
    }

    const passwordRegex = /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[\W_]).{8,}$/;
    if (value.password.trim() === "") {
      setPasswordError("Password can not be empty.");
      return;
    } else if (value.password.length < 8) {
      setPasswordError("Password must be at least 8 characters long.");
      return;
    } else if (!passwordRegex.test(value.password)) {
      setPasswordError(
        "Password must contain at least one letter, one number and one special character."
      );
      return;
    }

    try {
      const {
        status,
        data: { user, token, refreshToken },
      } = await axios.post(`http://localhost:8080/${formState}`, value);
      console.log(user);
      if (status === 201) {
        localStorage.setItem("Token", token);
        localStorage.setItem("RefreshToken", refreshToken);
        localStorage.setItem("UserId", user?._id);
        location.replace("/");
        //  navigate("/");
        notify("Login Successfully", "login");
      }
    } catch (err) {
      notify(err.response.data, "error");
    }
  };
  return (
    <main className="FormComponent" style={{ width: "90%",  marginTop: "50px", zIndex: "1111" }}>
      <section
        style={{
          backgroundColor: "white",
          borderRadius: "20px",
          boxShadow: "0px 5px 8px rgba(0, 0, 0, 0.2)",
          padding: "20px",
        }}
      >
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
          <img
            src={logo}
            alt="Brand Logo"
            width={120}
            height={100}
            style={{ objectFit: "contain" }}
          />

          <h2 style={{ fontSize: "34px" }}>Sign In</h2>
        </div>
        <section style={{ backgroundColor: "white" }}>
          <div style={{ margin: "25px 0px" }}>
            <TextField
              name="email"
              id="standard-controlled"
              label="Email"
              inputProps={{
                maxLength: 30,
              }}
              value={value.email}
              onChange={handleChange}
              error={!!emailError}
              helperText={emailError}
              onKeyDown={(event) => {
                if (event.keyCode === 32) {
                  event.preventDefault();
                }
              }}
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
                inputProps={{
                  maxLength: 15,
                }}
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
                onKeyDown={(event) => {
                  if (event.keyCode === 32) {
                    event.preventDefault();
                  }
                }}
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
              {passwordError && (
                <FormHelperText error>{passwordError}</FormHelperText>
              )}
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
              className="loginBtn"
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
