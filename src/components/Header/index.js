import * as React from "react";

import "./style.css";

export default function Header({ blackHeader }) {
  return (
    <header className={blackHeader ? "black" : ""}>
      <div className="logo">
        <a href="/">
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/0f/Logo_Netflix.png" alt="logo netflix"/>
        </a>
      </div>
      <div className="user">
        <a href="/">
          <img src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png" alt="Usuário"/>
        </a>
      </div>
    </header>
  );
}
