import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./screens/About";
import Exercise from "./screens/Exercise";
import Home from "./screens/Home";
import Login from "./screens/Login/Login";
import SignUp from "./screens/SignUp/SignUp";
import Favourite from "./screens/Favourite";
import ContextProvider from "./context/Context";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./app.css";

const Token = localStorage.getItem("Token");

const theme = createTheme({
  palette: {
    primary: {
      main: "#50A060", 
      contrastText: "#ffffff", 
    },
    
    action: {
      hover: "#edf5ef",
      contrastText: "#ffffff", 
    },
  },
});

export const routes1 = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/register",
    element: <SignUp />,
  },
  {
    path: "*",
    element: <Favourite />,
  },
]);

export const routes2 = createBrowserRouter([
  { path: "/", element: <Home /> },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/exercises",
    element: <Exercise />,
  },
  {
    path: "*",
    element: <Favourite />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <ContextProvider>
      <ToastContainer
        position="bottom-left"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <RouterProvider router={Token ? routes2 : routes1} />
    </ContextProvider>
    </ThemeProvider>
  </React.StrictMode>
);
