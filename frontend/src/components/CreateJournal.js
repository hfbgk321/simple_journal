import React, { useState } from "react";
import "./CreateJournal.css";
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

export default function CreateJournal() {
  const [Word, setWord] = useState(localStorage.getItem("Word"));
  const [Story, setStory] = useState(localStorage.getItem("Story"));

  const handleClick = () => {
    alert(Story);
  };
  return (
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
  );
}
