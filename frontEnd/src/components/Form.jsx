import React, { useContext } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { Button } from "@mui/material";
import axios from "axios";
import { styled } from "@mui/material/styles";
import { GlobalContext } from "../context/Context";

const StyledTextField = styled(TextField)(({ theme }) => ({
  "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button": {
    "-webkit-appearance": "none",
    margin: 0,
  },
  '& input[type="number"]': {
    "-moz-appearance": "textfield",
  },
}));

const workouts = [
  {
    value: "Strength Training",
    label: "Strength Training",
  },
  {
    value: "Aerobic Training",
    label: "Aerobic Training",
  },
  {
    value: "Balance and Stability Training",
    label: "Balance and Stability Training",
  },
  {
    value: "Co-ordination and Agility Training",
    label: "Co-ordination and Agility Training",
  },
  {
    value: "Flexibility and Mobility Training",
    label: "Flexibility and Mobility Training",
  },
];

export default function StateTextFields({ setOpen }) {
  const { allWorkouts, setAllWorkouts } = useContext(GlobalContext);

  const [title, setTitle] = React.useState("");
  const [titleError, setTitleError] = React.useState(false);

  const [description, setDescription] = React.useState("");
  const [descriptionError, setDescriptionError] = React.useState(false);

  const [type, setType] = React.useState("");
  const [typeError, setTypeError] = React.useState(false);

  const [duration, setDuration] = React.useState("");
  const [durationError, setDurationError] = React.useState(false);

  const [date, setDate] = React.useState("");
  const [dateError, setDateError] = React.useState(false);

  const [titleSyntax, setTitleSyntax] = React.useState(false);
  const [descriptionSyntax, setDescriptionSyntax] = React.useState(false);
  const [durationSyntax, setDurationSyntax] = React.useState(false);

  const validateInputs = () => {
    let isValid = true;
    const regex = /^[A-Za-z]+( [A-Za-z]+)*$/;
    const numRegex = /^[0-9]*$/;

    if (title.trim() === "") {
      setTitleError(true);
      isValid = false;
    } else {
      if (regex.test(title)) {
        setTitleSyntax(false);
        console.log("MATCHED", regex.test(title));
      } else {
        setTitleSyntax(true);
        console.log("NOT MATCHED");
      }
      setTitleError(false);
    }

    if (description.trim() === "") {
      setDescriptionError(true);
      isValid = false;
    } else {
      if (regex.test(description)) {
        setDescriptionSyntax(false);
        console.log("MATCHED", regex.test(description));
      } else {
        setDescriptionSyntax(true);
        console.log("NOT MATCHED");
      }
      setDescriptionError(false);
    }

    if (type.trim() === "") {
      setTypeError(true);
      isValid = false;
    } else {
      setTypeError(false);
    }

    if (duration.trim() === "") {
      setDurationError(true);
      isValid = false;
    } else {
      if (numRegex.test(duration)) {
        setDurationSyntax(false);
        console.log("MATCHED", regex.test(duration));
      } else {
        setDurationSyntax(true);
        console.log("NOT MATCHED");
      }
      setDurationError(false);
    }

    if (date.trim() === "") {
      setDateError(true);
      isValid = false;
    } else {
      setDateError(false);
    }

    // Add more validation checks for additional input fields if needed

    return isValid;
  };

  const saveToDb = async () => {
    if (validateInputs()) {
      // if (!titleSyntax && !descriptionSyntax) {
        console.log("No Error Found");
        const body = { title, description, type, duration, date };
        try {
          const { data } = await axios.post(
            "http://localhost:8080/workout",
            body
          );
        const WorkOutClone = allWorkouts.slice(0);
        WorkOutClone.push(data);
        setAllWorkouts(WorkOutClone);

          console.log(data);
        } catch (e) {
          alert(e.message);
        }
        setOpen(false);
      // }
    }
  };

  // let const obj = {};

  //   const descriptionObject = {
  //     "Strength Training":
  //       "Strength training is a form of physical exercise that involves resistance or weight training to increase muscle strength, endurance, and overall power.",
  //     "Aerobic Training":
  //       "Aerobic training is a form of exercise that involves continuous and rhythmic movements to improve cardiovascular fitness by increasing the body's oxygen intake and endurance.",
  //     "Balance and Stability Training":
  //       "Balance and Stability Training focuses on strengthening the muscles involved in balance and stability, enhancing coordination, and reducing the risk of falls and injuries.",
  //     "Co-ordination and Agility Training":
  //       " Co-ordination and Agility Training involves exercises and drills that enhance coordination, balance, spatial awareness, quickness, and reaction time. ",
  //     "Flexibility and Mobility Training":
  //       " Flexibility and Mobility Training involves various stretching, strengthening, and mobility exercises to increase flexibility, joint mobility, and overall functional movement. ",
  //   };

  //     if (type) {
  //         if (type == "Strength Training" ) {
  //             setDescription("Strength training is a form of physical exercise that involves resistance or weight training to increase muscle strength, endurance, and overall power.");
  //       }
  // }

  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "100%" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-controlled"
        label="Title"
        inputProps={{ inputMode: "text", pattern: "[A-Za-z]" }}
        value={title}
        type="text"
        required
        variant="standard"
        onChange={(event) => {
          setTitle(event.target.value);
        }}
        helperText={
          titleError ? (
            <p style={{ color: "red", marginBottom: "0px" }}>
              Title can not be empty
            </p>
          ) : titleSyntax ? (
            <p style={{ color: "red", marginBottom: "0px" }}>
              Invalid Syntax For Title
            </p>
          ) : (
            ""
          )
        }
      />

      <TextField
        id="outlined-controlled"
        label="Type"
        value={type}
        select
        type="text"
        variant="standard"
        required
        onChange={(event) => {
          setType(event.target.value);
        }}
        helperText={
          typeError ? (
            <p style={{ color: "red", marginBottom: "0px" }}>
              Type can not be empty
            </p>
          ) : (
            ""
          )
        }
      >
        {workouts.map((option, index) => (
          <MenuItem key={index} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>

      <TextField
        id="outlined-controlled"
        label="Description"
        value={description}
        type="text"
        variant="standard"
        required
        onChange={(event) => {
          setDescription(event.target.value);
        }}
        helperText={
          descriptionError ? (
            <p style={{ color: "red", marginBottom: "0px" }}>
              Description can not be empty
            </p>
          ) : descriptionSyntax ? (
            <p style={{ color: "red", marginBottom: "0px" }}>
              Invalid Syntax For Description
            </p>
          ) : (
            ""
          )
        }
      />

      <StyledTextField
        id="outlined-controlled"
        label="Duration"
        value={duration}
        type="number"
        variant="standard"
        required
        onChange={(event) => {
          setDuration(event.target.value);
        }}
        helperText={
          durationError ? (
            <p style={{ color: "red", marginBottom: "0px" }}>
              Duration can not be empty
            </p>
          ) : durationSyntax ? (
            <p style={{ color: "red", marginBottom: "0px" }}>
              Invalid Syntax For Duration
            </p>
          ) : (
            ""
          )
        }
      />

      <TextField
        id="outlined-controlled"
        // label="Date"
        value={date}
        type="date"
        variant="standard"
        required
        onChange={(event) => {
          setDate(event.target.value);
        }}
        helperText={
          dateError ? (
            <p style={{ color: "red", marginBottom: "0px" }}>
              Date can not be empty
            </p>
          ) : (
            ""
          )
        }
      />

      <Button
        sx={{ backgroundColor: "#50A060" }}
        variant="contained"
        onClick={saveToDb}
      >
        SAVE
      </Button>
    </Box>
  );
}
