import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/reset.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import logo from "./agendar.png";
import Favicon from "react-favicon";
import { AppointmentsProvider } from "./providers/appointmentsProvider";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Favicon url={logo} />
    <AppointmentsProvider>
      <App />
    </AppointmentsProvider>
  </React.StrictMode>
);
reportWebVitals();
