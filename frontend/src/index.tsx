import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/global.css";
import App from "./pages/PalindromeChecker";
import Login from "./pages/Login";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <Login />
  </React.StrictMode>
);
