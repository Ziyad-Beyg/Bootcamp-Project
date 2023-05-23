import React from "react";
import ExerciseCards from "../components/ExercisesCards";
import FormModal from "../components/FormModal"

const Exercise = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
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
      <FormModal/>
    </div>
  );
};

export default Exercise;
