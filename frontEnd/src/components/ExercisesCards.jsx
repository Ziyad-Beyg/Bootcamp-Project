import React, { useState, useEffect, useContext } from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import ImgMediaCard from "./SingleCard";
import axios from "axios";
import { GlobalContext } from "../context/Context";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function ResponsiveGrid() {
  const { allWorkouts, setAllWorkouts } = useContext(GlobalContext);

  // const [AllData, setAllData] = useState([]);

  useEffect(() => {
    getAllData();
  }, []);

  const getAllData = async () => {
    try {
      const { data } = await axios.get("http://localhost:8080/workouts");
      setAllWorkouts(data);
      // dispatch({ type: "ALL_WORKOUTS", payload: data });
      console.log(allWorkouts);
      // console.log(state);
    } catch (e) {
      alert(e.message);
    }
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "20px",
        marginTop: "120px",
      }}
    >
      {allWorkouts.map((singleData) => (
        <ImgMediaCard key={singleData._id} singleData={singleData} />
      ))}
    </Box>
  );
}
