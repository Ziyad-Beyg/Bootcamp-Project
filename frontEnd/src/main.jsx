import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./screens/About";
import Exercise from "./screens/Exercise";
import Home from "./screens/Home";
import Login from "./screens/Login/Login";
import SignUp from "./screens/SignUp/SignUp";
import Favourite from "./screens/Favourite";
import "./app.css";

// const [Token, setToken] = useState(tokenCheck())

const Token = localStorage.getItem('Token') 
// const tokenCheck = () => {

// if(token){
//   return true
// }
// else{
//   return false

// }
 

// }

export const routes1 = createBrowserRouter([
  // { path: "/", element: <Home /> },
  // {
  //   path: "/about",
  //   element: <About />,
  // },
  // {
  //   path: "/exercises",
  //   element: <Exercise />,
  // },
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
  // {
  //   path: "/login",
  //   element: <Login />,
  // },
  // {
  //   path: "/register",
  //   element: <SignUp />,
  // },
  {
    path: "*",
    element: <Favourite />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={ Token ? routes2 : routes1} />
  </React.StrictMode>
);
