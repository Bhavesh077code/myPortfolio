import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Project from "./Pages/Project";
import Contact from "./Pages/contact";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home /> ,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/project",
    element: <Project />,
  },
  {
    path: "/contact",
    element: <Contact /> ,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;