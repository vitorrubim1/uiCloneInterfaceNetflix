import * as React from "react";

import "./style.css";
import NetflixLogo "../../src/assets/netflixLogo.png";

export default function Header({ blackHeader }) {
  return (
    <header className={blackHeader ? "black" : ""}>
      <div className="logo">
        <a href="/">
          <img src={NetflixLogo} alt="logo netflix"/>
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
