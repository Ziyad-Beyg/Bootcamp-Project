import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./screens/About";
import Exercise from "./screens/Exercise";
import Home from "./screens/Home";
import Login from "./screens/Login/Login";
import SignUp from "./screens/SignUp/SignUp";
import Favourite from "./screens/Favourite";
import "./app.css";

export const routes = createBrowserRouter([
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
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <SignUp />,
  },
  {
    path: "/favorite",
    element: <Favourite />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
);
