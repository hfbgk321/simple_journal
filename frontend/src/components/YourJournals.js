import React from "react";
import "./YourJournals.css";
import { useAuth0 } from "@auth0/auth0-react";
export default function YourJournals() {
  const { user, isAuthenticated } = useAuth0();
  return (
    <div className="container">
      {isAuthenticated && (
        <>
          <input type="text" placeholder="Search Topics" />
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
        </>
      )}

      {!isAuthenticated && <h1>Please Login to create and view your posts</h1>}
    </div>
  );
}
