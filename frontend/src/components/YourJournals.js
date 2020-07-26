import React, { useState, useEffect } from "react";
import "./YourJournals.css";
import { useAuth0 } from "@auth0/auth0-react";
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

export default function YourJournals() {
  const [Topic, setTopic] = useState("");
  const [YourJournals, setYourJournals] = useState([]);
  // if (YourJournals.length === 0) {
  //   axios
  //     .get(`http://localhost:2000/myjournals/${localStorage.getItem("email")}`)
  //     .then((res) => {
  //       setYourJournals(res.data);
  //       console.log("first generate");
  //     });
  // }
  useEffect(() => {
    if (Topic.length === 0) {
      axios
        .get(
          `http://localhost:2000/myjournals/${localStorage.getItem("email")}`
        )
        .then((res) => {
          setYourJournals(res.data);
          console.log(res.data);
        })
        .catch((err) => console.log(err));
    } else {
      axios
        .get(
          `http://localhost:2000/myjournals/${localStorage.getItem(
            "email"
          )}/${Topic}`
        )
        .then((res) => {
          setYourJournals(res.data);
          console.log(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [Topic]);

  // useEffect(()=>{
  //   setYourJournals(specificJournal);
  // },[specificJournal])

  return (
    <div className="container">
      <>
        <input
          type="text"
          placeholder="Search Topics"
          onChange={(e) => setTopic(e.target.value)}
          value={Topic}
        />
        {YourJournals.map((journal, i) => {
          return (
            <div className="item" key={i}>
              <h2>{journal.topic}</h2>
              <h4>{truncate(journal.content, 6)}...</h4>
            </div>
          );
        })}

        <button onClick={() => console.log(YourJournals)}></button>
      </>
    </div>
  );
}
