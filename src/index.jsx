import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

// Add smooth scrolling behavior globally
document.documentElement.style.scrollBehavior = 'smooth';

createRoot(document.getElementById("app")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);