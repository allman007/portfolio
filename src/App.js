import { CssBaseline } from "@material-ui/core";
import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Home from "./components";
import About from "./components/About";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <>
      <CssBaseline />
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/contact" component={Contact} />
    </>
  );
}

export default App;
