import { Footer, Header } from "components";
import React from "react";
import "./App.css";
import { Home } from "pages";
const { Suspense } = React;

function App() {
  return (
    <div>
      <Header />
      <Home />
      <Footer />
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
