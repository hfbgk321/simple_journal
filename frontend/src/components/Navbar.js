import React from "react";
import "./Navbar.css";

import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import LogoutButton from "./LogoutButton";
import LoginButton from "./LoginButton";

export default function Navbar() {
  const { user, isAuthenticated, to } = useAuth0();
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Journal.Me
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">
                <Link to="/">All Stories</Link>
              </a>
            </li>
            {!isAuthenticated && <LoginButton />}
            <li className="nav-item">
              <a className="nav-link" href="#">
                <Link to="/create">Create Story</Link>
              </a>
            </li>
            {isAuthenticated && (
              <>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <Link to="/create">Create Story</Link>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <Link to="/your_journals">Your Stories</Link>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link">
                    <img
                      src={user.picture}
                      style={{ borderRadius: 50, height: 30, width: 30 }}
                    />
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link">{user.email}</a>
                </li>
                <LogoutButton />
              </>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
}
