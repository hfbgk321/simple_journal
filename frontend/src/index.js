import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <Auth0Provider
    domain="dev-8uboymrb.us.auth0.com"
    clientId="cbbZiy2IspiJkSPvDKmWLUs10gLhj62Y"
    redirectUri="http://localhost:S3000/"
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);
