import React from "react";
import ExerciseCards from "../components/ExercisesCards";

const Exercise = () => {
  return (
    <div>
      <ExerciseCards />
      <div
        style={{
          backgroundColor: "#50A060",
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
          fontWeight: "bold",
          fontSize: "2.5rem",
          position: "fixed",
          bottom: "50px",
          right: "50px",
        }}
      >
        +
      </div>
    </div>
  );
};

export default Exercise;
