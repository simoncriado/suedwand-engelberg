import React from "react";
import "./App.css";
import logo from "./suedwand-logo.png";
import { FaInstagram } from "react-icons/fa";

function App() {
  return (
    <div className="App">
      <div className="App-content">
        <img src={logo} alt="Sudwand Logo" className="App-logo" />
      </div>
      <footer>
        <a
          href="https://www.instagram.com/suedwandengelberg/"
          target="_blank"
          rel="noopener noreferrer"
          className="instagram-link"
        >
          <FaInstagram size={32} />
        </a>
      </footer>
    </div>
  );
}

export default App;
