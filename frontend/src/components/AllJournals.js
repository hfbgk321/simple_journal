import React, { useState, useEffect } from "react";
import "./AllJournals.css";

import axios from "axios";
const truncate = (str, no_word) => {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (count === no_word) {
      return str.substring(0, i);
    } else if (str.substring(i, i + 1) === " ") {
      count++;
    }
  }
  return str;
};
export default function AllJournals() {
  const [Topic, setTopic] = useState("");
  const [Journals, setJournals] = useState([]);
  useEffect(() => {
    console.log(Topic);
    axios
      .get("http://localhost:2000/journals/" + Topic)
      .then((res) => {
        setJournals(res.data);
        console.log(Journals);
      })
      .catch((err) => console.log(err));
  }, [Topic]);
  return (
    <div className="container">
      <input
        className="search_box"
        type="text"
        placeholder="Search for a topic ..."
        onChange={(e) => setTopic(e.target.value)}
      />
      {Journals.map((journal) => {
        return (
          <div className="child">
            <input
              type="text"
              value={journal._id}
              style={{ display: "none" }}
            />
            <h5>Author: {journal.author}</h5>
            <h6>
              Date Created:{" "}
              {journal.dateCreated.substring(5, 7) +
                "/" +
                journal.dateCreated.substring(8, 10) +
                "/" +
                journal.dateCreated.substring(0, 4)}
            </h6>
            <p>{truncate(journal.content, 6) + " ..."}</p>
          </div>
        );
      })}
    </div>
  );
}
