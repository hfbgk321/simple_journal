import React, { useState, useEffect } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import CreateJournal from "./components/CreateJournal";
import AllJournals from "./components/AllJournals";
import YourJournals from "./components/YourJournals";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
      </div>

      <Switch>
        <Route exact path="/" component={AllJournals} />
        <Route exact path="/create" component={CreateJournal} />
        <Route exact path="/your_journals" component={YourJournals} />
      </Switch>
    </Router>
  );
}

export default App;
