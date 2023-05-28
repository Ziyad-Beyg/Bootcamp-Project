import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./screens/About";
import Exercise from "./screens/Exercise";
import Home from "./screens/Home";
import Login from "./screens/Login/Login";
import SignUp from "./screens/SignUp/SignUp";
import Favourite from "./screens/Favourite";
import ContextProvider from "./context/Context";

import "./app.css";

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
  // {
  //   path: "/favorite",
  //   element: <Favourite />,
  // },
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
    path: "/favorite",
    element: <Favourite />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextProvider>
      <RouterProvider
        router={localStorage.getItem("Token") !== undefined ? routes2 : routes1}
      />
    </ContextProvider>
  </React.StrictMode>
);
