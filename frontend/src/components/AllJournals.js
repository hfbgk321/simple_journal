import React from "react";
import "./AllJournals.css";

export default function AllJournals() {
  return (
    <div className="container">
      <input
        className="search_box"
        type="text"
        placeholder="Search for a topic ..."
      />
      <div className="child"></div>
      <div className="child"></div>
      <div className="child"></div>
      <div className="child"></div>
    </div>
  );
}
