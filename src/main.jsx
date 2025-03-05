import { DarkModeProvider } from "./components/DarkModeContext.jsx";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./globals.css";
import React from "react";

createRoot(document.getElementById("root")).render(
  <DarkModeProvider>
    <App />
  </DarkModeProvider>
);
