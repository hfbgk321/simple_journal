import React, { useState } from "react";
import "./CreateJournal.css";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";

const words = [
  "responsible",
  "office",
  "parameter",
  "innovation",
  "voucher",
  "bow",
  "door",
];

export default function CreateJournal() {
  const { user, isAuthenticated } = useAuth0();
  window.onbeforeunload = () => {
    const today = new Date();
    localStorage.setItem("Word", document.querySelector(".word").innerHTML);
    localStorage.setItem("Story", document.querySelector(".entry").innerHTML);
    localStorage.setItem(
      "Date",
      `${today.getMonth() + 1}/${today.getDate()}/${today.getFullYear()}`
    );
  };
  const [Word, setWord] = useState(localStorage.getItem("Word"));
  const [Story, setStory] = useState(localStorage.getItem("Story"));
  const [Date, setDate] = useState(localStorage.getItem("Date"));

  const handleClick = () => {
    const story = {
      author: "test name",
      content: Story,
      email: "test@gmail.com",
      topic: Word,
    };
    axios
      .post("http://localhost:1000/publish/journal", story)
      .then((res) => {
        alert("successfully published");
        setStory("");
      })
      .catch((err) => alert(`Unable to publish: ${err}`));
  };

  return (
    <div className="container">
      {/* {isAuthenticated && ( */}
      <>
        <h1 className="journal_header">Today's Exercise: {Date}</h1>
        <h2 className="word_of_day">
          Word Of The Day:{" "}
          <span className="word">
            {Word.length === 0
              ? words[Math.floor(Math.random() * words.length)]
              : Word}
          </span>
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
      </>
      {/* )} */}
      {/* {!isAuthenticated && <h1>Please Login To Create Posts</h1>} */}
    </div>
  );
}
