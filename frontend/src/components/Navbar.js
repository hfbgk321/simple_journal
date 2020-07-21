import React, { useState } from "react";
import "./Navbar.css";

import { Link } from "react-router-dom";
import { GoogleLogin, isSignedIn, GoogleLogout } from "react-google-login";

export default function Navbar() {
  const [email, setEmail] = useState(localStorage.getItem("email"));
  const [name, setName] = useState(localStorage.getItem("name"));
  const [SignedIn, setSignedIn] = useState(localStorage.getItem("SignedIn"));

  const responseGoogle = (res) => {
    fetch(
      `https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=${res.tokenId}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setEmail(data.email);
        setName(data.name);
        setSignedIn(true);
        localStorage.setItem("email", data.email);
        localStorage.setItem("name", data.name);
        localStorage.setItem("SignedIn", true);
        localStorage.setItem("imgUrl", data.picture);
        window.location.href = "http://localhost:3000/create";
      });
  };

  const responseError = (res) => {
    console.log(res);
  };
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
                <Link to={{ pathname: "/", state: { email, name, SignedIn } }}>
                  All Stories
                </Link>
              </a>
            </li>
            {SignedIn && (
              <>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <Link
                      to={{
                        pathname: "/create",
                        state: { email, name, SignedIn },
                      }}
                    >
                      Create Story {}
                    </Link>
                  </a>
                </li>
              </>
            )}

            <>
              {SignedIn && (
                <>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <Link
                        to={{
                          pathname: "/your_journals",
                          state: { email, name, SignedIn },
                        }}
                      >
                        Your Stories
                      </Link>
                    </a>
                  </li>
                </>
              )}

              {!SignedIn && (
                <>
                  <GoogleLogin
                    clientId="757883100007-1t6et1rh0n8d6katjfmkmd0ntdd542f7.apps.googleusercontent.com"
                    buttonText="Login"
                    onSuccess={responseGoogle}
                    onFailure={responseError}
                    cookiePolicy={"single_host_origin"}
                    redirectUri="http://localhost:3000/"
                    isSignedIn={true}
                  />
                </>
              )}
              {SignedIn && (
                <>
                  <img
                    src={localStorage.getItem("imgUrl")}
                    width="50"
                    height="50"
                    style={{
                      borderRadius: 25,
                      marginLeft: 10,
                      marginRight: 20,
                    }}
                  ></img>
                  <GoogleLogout
                    clientId="757883100007-1t6et1rh0n8d6katjfmkmd0ntdd542f7.apps.googleusercontent.com"
                    buttonText="Logout"
                    onLogoutSuccess={() => {
                      console.log("success");
                      setName("");
                      setEmail("");
                      setSignedIn(false);
                      localStorage.clear();
                      // window.location.reload(false);
                      window.location.href = "http://localhost:3000/";
                    }}
                    onLogoutFailure={() => {
                      console.log("failed");
                    }}
                  ></GoogleLogout>
                </>
              )}
              {/* <li className="nav-item">
                <a className="nav-link">
                  <img
                    src={user.picture}
                    style={{ borderRadius: 50, height: 30, width: 30 }}
                  />
                </a>
              </li> */}
              {/* <li className="nav-item">
                <a className="nav-link">{user.email}</a>
              </li> */}
            </>
          </ul>
        </div>
      </nav>
    </div>
  );
}
