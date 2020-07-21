import React, { useState, useEffect } from "react";
import "./CreateJournal.css";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";

const randomWords = require("random-words");

export default function CreateJournal() {
  const [SignedIn, setSignedIn] = useState(localStorage.getItem("SignedIn"));

  const [Word, setWord] = useState(
    localStorage.getItem("Word") === null
      ? randomWords()
      : localStorage.getItem("Word")
  );
  const [Story, setStory] = useState(localStorage.getItem("Story"));
  const [Date, setDate] = useState(localStorage.getItem("Date"));
  useEffect(() => {
    if (SignedIn) {
      var today = new window.Date();
      localStorage.setItem("Word", document.querySelector(".word").innerHTML);
      localStorage.setItem("Story", document.querySelector(".entry").innerHTML);
      localStorage.setItem(
        "Date",
        `${today.getMonth() + 1}/${today.getDate()}/${today.getFullYear()}`
      );
    }
  });

  const [Def, setDef] = useState("");
  const [Type, setType] = useState("");
  const [Pronounciation, setPronounciation] = useState("");

  useEffect(() => {
    console.log(Word);
    fetch(
      `https://dictionaryapi.com/api/v3/references/collegiate/json/${Word}?key=efed29fb-bb2a-4bfe-bd9c-0652363a82bd`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data[0]);
        setDef(data[0].shortdef[0]);
        setType(data[0].fl);
        setPronounciation(data[0].hwi.hw);
      })
      .catch((err) => console.log(err));
  }, [Word]);

  const handleClick = () => {
    const story = {
      author: localStorage.getItem("name"),
      content: Story,
      email: localStorage.getItem("email"),
      topic: Word,
    };
    console.log(story);
    axios
      .post("http://localhost:2000/publish/journal", story)
      .then((res) => {
        alert("successfully published");
        setStory("");
        setWord("");
        localStorage.setItem("Word", "");
        setTimeout(() => window.location.reload(false), 500);
      })
      .catch((err) => alert(`Unable to publish: ${err}`));
  };

  return (
    <div className="main_container">
      <>
        {SignedIn && (
          <>
            <div className="header_container">
              <div className="header_content">
                <h1 className="journal_header">Today's Exercise: {Date}</h1>
                <h2 className="word_of_day">
                  Word Of The Day:{" "}
                  <span className="word">
                    {Word.length === 0 ? randomWords() : Word}
                  </span>
                </h2>
                <h4 className="definition">
                  <span style={{ fontWeight: "bolder" }}>Definition:</span>{" "}
                  {Def}
                </h4>
                <div className="noun_container">
                  <h4>Type: {Type}</h4>
                  <h4>Pronounciation: {Pronounciation}</h4>
                </div>
              </div>
            </div>

            <div className="story_container">
              <div>
                <textarea
                  className="entry"
                  name="Entry"
                  id=""
                  cols="50"
                  rows="10"
                  spellCheck="true"
                  placeholder="Write a story using the word of the day. It can be anything your mind thinks of."
                  value={Story}
                  onInput={(text) => setStory(text.target.value)}
                ></textarea>
              </div>
              <div>
                <Button
                  className="publish_button"
                  classes={{ root: "submit" }}
                  onClick={handleClick}
                >
                  Publish
                </Button>
              </div>
            </div>
          </>
        )}
      </>
    </div>
  );
}
