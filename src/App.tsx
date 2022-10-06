import React from "react";
import "./App.css";
import { Home } from "./pages";
const { Suspense } = React;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Home />
      </header>
    </div>
  );
}

function AppRoot(props: any) {
  return (
    <Suspense fallback={"Loading..."}>
      <App />
    </Suspense>
  );
}

export default AppRoot;
