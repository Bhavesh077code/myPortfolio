
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import Project from "../pages/Project";
import About from "../pages/About";
import Contact from "../Pages/Contact"; // ✅ FIXED

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