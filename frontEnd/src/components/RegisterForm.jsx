import React from "react";
import logo from "../assets/logo.png";
import signIn from "../assets/SigninIcon.png";

const RegisterForm = () => {
  return (
    <main style={{ width: "50%" }}>
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
              type="text"
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
              type="text"
              placeholder="bootcamp@gmail.com"
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
            <label>Password</label>
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
            />
          </div>

          <div style={{ margin: "25px 0px" }}>
            <label>Confirm Password</label>
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
            />
          </div>

          <button
            style={{
                marginTop: "10px",
              backgroundColor: "#50A060",
              padding: "10px 20px",
              margin: "15px 0px",
              outline: "none",
              border: "none",
              borderRadius: "25px",
              fontSize: "18px",
              fontWeight: "bold",
              letterSpacing: "1px",
              display: "flex",
              alignItems: "center",
              color: "white",
              margin: "35px auto",
            }}
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
        </section>
      </section>
    </main>
  );
};

export default RegisterForm;
