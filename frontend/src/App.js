import React, { useState } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import CreateJournal from "./components/CreateJournal";
import AllJournals from "./components/AllJournals";
// const word = words[Math.floor(Math.random() * words.length)];

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  window.onbeforeunload = () => {
    localStorage.setItem("Word", document.querySelector(".word").innerHTML);
    localStorage.setItem("Story", document.querySelector(".entry").innerHTML);
  };

  return (
    <Router>
      <div className="App">
        <Navbar />
      </div>

      <Switch>
        <Route exact path="/" component={AllJournals} />
        <Route exact path="/create" component={CreateJournal} />
      </Switch>
    </Router>
  );
}

export default App;
