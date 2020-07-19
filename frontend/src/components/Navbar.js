import React from "react";
import "./Navbar.css";

import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
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
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link" href="#">
                <Link to="/">All Stories</Link>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <Link to="/create">Create Story</Link>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Your Stories
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
