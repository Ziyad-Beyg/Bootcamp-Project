import React, { useState } from "react";
import logo from "../assets/logo.png";
import signIn from "../assets/SigninIcon.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import './../app.css'

const RegisterForm = () => {
  const [formState, setFormState] = useState("register");
  const [value, setValues] = useState({
    username: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async () => {
    try {
      const {
        status,
        data: { token, refreshToken },
      } = await axios.post(`http://localhost:8080/${formState}`, value);
      if (status === 201) {
        // localStorage.setItem("Token", token);
        // localStorage.setItem("RefreshToken", refreshToken);
        navigate("/");
      }
    } catch (err) {
      alert(err.message)
    }
    
  };

  return (
    <main className="FormComponent" style={{ width: "50%" }}>
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
          <h2 style={{ fontSize: "34px" }}>Sign Up</h2>
          <div style={{ margin: "25px 0px" }}>
            <label>Name</label>
            <br />
            <input
              value={value.username}
              onChange={handleChange}
              type="text"
              name="username"
              placeholder="Mirza Ziyad Ahmed Baig"
              style={{
                marginTop: "10px",
                backgroundColor: "#edf5ef",
                borderRadius: "10px",
                outline: "none",
                border: "none",
                color: "black",
                width: "100%",
                height: "40px",
                paddingLeft: "10px",
                fontSize: "14px",
              }}
            />
          </div>

          <div style={{ margin: "25px 0px" }}>
            <label>Email</label>
            <br />
            <input
              value={value.email}
              onChange={handleChange}
              name="email"
              type="text"
              placeholder="ziyadbaig@gmail.com"
              style={{
                marginTop: "10px",
                backgroundColor: "#edf5ef",
                borderRadius: "10px",
                outline: "none",
                border: "none",
                color: "black",
                width: "100%",
                height: "40px",
                paddingLeft: "10px",
                fontSize: "14px",
              }}
            />
          </div>

          <div style={{ margin: "10px 0px" }}>
            <label>Password</label>
            <br />
            <input
              value={value.password}
              onChange={handleChange}
              name="password"
              type="password"
              placeholder="********"
              style={{
                marginTop: "10px",
                backgroundColor: "#edf5ef",
                borderRadius: "10px",
                outline: "none",
                border: "none",
                color: "black",
                width: "100%",
                height: "40px",
                paddingLeft: "10px",
                fontSize: "14px",
              }}
            />
          </div>

          <div style={{ margin: "10px 0px" }}>
            {/* <label>Confirm Password</label>
            <br />
            <input
              type="password"
              placeholder="********"
              style={{
                marginTop: "10px",
                backgroundColor: "#edf5ef",
                borderRadius: "10px",
                outline: "none",
                border: "none",
                color: "black",
                width: "100%",
                height: "40px",
                paddingLeft: "10px",
                fontSize: "14px",
              }}
            /> */}

            <Link to={"/"} style={{ textDecoration: "none" }}>
              <p
                style={{
                  fontSize: "12px",
                  color: "silver",
                  padding: "0px 10px",
                }}
              >
                already have an account?
                <span style={{ color: "#50A060", fontWeight: "bold" }}>
                  LOGIN
                </span>
              </p>
            </Link>

            <button
              style={{
                marginTop: "10px",
                backgroundColor: "#50A060",
                padding: "10px 20px",
                // margin: "15px 0px",
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
              Sign Up &nbsp;
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

export default RegisterForm;
