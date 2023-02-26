import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "./global.css";
import {Auth0Provider} from '@auth0/auth0-react';
// import cursor1 from "./styles/cursor.png"
// import { emojiCursor } from "cursor-effects";
// new emojiCursor({ emoji: ["🐱", " "] });

ReactDOM.render(
  <React.StrictMode>
 <Auth0Provider
  domain="dev-blapvmv4askhods2.us.auth0.com"
  clientId="SGGGXXzgXFOqCYTdsXlrJa3ZaE7JKncS"
  authorizationParams={{
    redirect_uri: window.location.origin,
  }}
> 
    <App />
  </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
