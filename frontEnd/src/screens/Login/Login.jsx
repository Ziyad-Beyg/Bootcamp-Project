import React from "react";
import LoginForm from "../../components/LoginForm";
import loginBg from "../../assets/bgNoLeafs.png";
import Leafs from "../../assets/twoLeafs.png";
import Lottie from "lottie-react";
import animationData from "../../assets/Befit.json";
import "../../app.css";

const Login = () => {
  return (
    <main
      style={{
        display: "grid",
        gridTemplateColumns: 'repeat(2, 1fr)',
        height: "100vh",
        margin: "0px",
        padding: "0px",
      }}
      className="grid-main"
    >
      <section
        style={{
          backgroundColor: "#fff",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          position: "relative",
          marginTop:"40px"
        }}
        className="form-section"
      >
        <LoginForm />
        <img
          src={Leafs}
          alt="two leafs"
          width={50}
          className="leafImg"
          style={{
            objectFit: "contain",
            position: "absolute",
            bottom: "150px",
            right: "0%",
          }}
        />
      </section>
      <section
        style={{
          backgroundColor: "#edf5ef",
          width: "100%",
          overflow: "hidden",
          position: "relative",
        }}
        className="green-section"
      >
        <img
          src={loginBg}
          alt="login Bg "
          width={'100%'}
          style={{
            objectFit: "contain",
            position: "absolute",
            bottom: "150px",
            left: "0%",
          }}
          className="animation-img"
        />
        <Lottie
          animationData={animationData}
          style={{
            position: "absolute",
            left: "1%",
            bottom: "8%",
            width: "90%",
            height: "90%",
          }}
          className="animation"
        />
      </section>

      <hr
        style={{
          color: "#50A060",
          borderBottom: "2px solid #50A060",
          position: "absolute",
          bottom: "150px",
          width: "100%",
        }}
      />
      <hr
        style={{
          color: "#50A060",
          borderBottom: "2px solid #50A060",
          position: "absolute",
          bottom: "145px",
          width: "100%",
        }}
      />
    </main>
  );
};

export default Login;
