import { Box, Button, Typography } from "@mui/material";
import axios from "axios";
import React, { useContext } from "react";
import { GlobalContext } from "../context/Context";

const DeleteForm = ({ setOpen, allData }) => {
    const {allWorkouts, setAllWorkouts} = useContext(GlobalContext)

  const deleteItemFromDB = async () => {
    try {
      const { data } = await axios.delete(
        `http://localhost:8080/workout/${allData._id}`
      );
      setAllWorkouts(allWorkouts.filter((item) => item._id !== allData._id));
      console.log(data);
      setOpen(false);
    } catch (e) {
      alert(e.message);
    }
  };

  return (
    <>
      <Typography id="modal-modal-description" sx={{}}>
        Are you sure, you want to delete this item?
      </Typography>
      <Box sx={{display:'flex', justifyContent: 'space-around', marginTop:"40px", marginBottom:"20px" }}>
      <Button
        variant="outlined"
        sx={{
          color: "#50A060",
          borderColor: "#50A060",
          padding: "5px 40px",
        }}
        size="small"
        onClick={() => {
          setOpen(false);
        }}
      >
        No
      </Button>
      <Button
        variant="contained"
        sx={{
          color: "#50A060",
          backgroundColor: "#edf5ef",
          borderColor: "#50A060",
          padding: "5px 40px",
        }}
        size="small"
        onClick={
          deleteItemFromDB
        }
      >
        Yes
      </Button>
      </Box>
    </>
  );
};

export default DeleteForm;
