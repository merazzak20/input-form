import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import SimpleForm from "./components/SimpleForm/SimpleForm.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <RouterProvider router={router} /> */}
    <App></App>
  </StrictMode>
);