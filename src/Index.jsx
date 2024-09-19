import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import App from "./App";

// Import BrowserRouter and rename it to Router
import { BrowserRouter as Router } from "react-router-dom";

// Wrap the App component with the Router component to enable the router features.
const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <Router>
      <App />
    </Router>
  </StrictMode>,
  document.getElementById("root")
);