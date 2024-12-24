import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; 
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap styles
import "@fortawesome/fontawesome-free/css/all.min.css"; // Import Font Awesome styles

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
