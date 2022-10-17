import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AppRoot from "./App";
import RelayEnvironment from "./relay/RelayEnvironment";
import { RelayEnvironmentProvider } from "react-relay/hooks";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <BrowserRouter>
        <AppRoot />
      </BrowserRouter>
    </RelayEnvironmentProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
