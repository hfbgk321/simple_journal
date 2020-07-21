import React from "react";
import "./YourJournals.css";
import { useAuth0 } from "@auth0/auth0-react";
export default function YourJournals() {
  const { user, isAuthenticated } = useAuth0();
  return (
    <div className="container">
      <>
        <input type="text" placeholder="Search Topics" />
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
      </>
    </div>
  );
}
