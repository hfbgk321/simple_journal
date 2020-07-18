import React, { useState } from "react";
import "./App.css";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const today = new Date();
const words = [
  "responsible",
  "office",
  "parameter",
  "innovation",
  "voucher",
  "bow",
  "door",
];

const word = words[Math.floor(Math.random() * words.length)];
function App() {
  window.onbeforeunload = () => {
    localStorage.setItem("Word", document.querySelector(".word").innerHTML);
    localStorage.setItem("Story", document.querySelector(".entry").innerHTML);
  };

  const [Word, setWord] = useState(localStorage.getItem("Word"));
  const [Story, setStory] = useState(localStorage.getItem("Story"));

  const handleClick = () => {
    alert(Story);
  };
  return (
    <div className="App">
      <div>
        <nav class="navbar navbar-expand-rg navbar-light bg-light">
          <a class="navbar-brand" href="#">
            Journal.Me
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <a class="nav-link" href="#">
                  Home <span class="sr-only">(current)</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  All Journals
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Pricing
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link disabled"
                  href="#"
                  tabindex="-1"
                  aria-disabled="true"
                >
                  Disabled
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div class="container">
        <h1 className="journal_header">
          Today's Exercise:{" "}
          {`${today.getMonth()}/${today.getDay()}/${today.getFullYear()}`}
        </h1>
        <h2 className="word_of_day">
          Word Of The Day: <span class="word">{Word}</span>
        </h2>
        <textarea
          className="entry"
          name="Entry"
          id=""
          cols="50"
          rows="10"
          spellCheck="true"
          placeholder="Write a story using the word of the day."
          value={Story}
          onInput={(text) => setStory(text.target.value)}
        ></textarea>
        <Button
          className="publish_button"
          classes={{ root: "submit" }}
          onClick={handleClick}
        >
          Publish
        </Button>
      </div>
    </div>
  );
}

export default App;
