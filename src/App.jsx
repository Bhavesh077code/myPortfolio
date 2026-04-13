
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import Project from "./Pages/Project";
import About from "./Pages/About";
import Contact from "./Pages/contact";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/contact", element: <Contact /> },
  { path: "/project", element: <Project /> },
  { path: "/about", element: <About /> },

]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
