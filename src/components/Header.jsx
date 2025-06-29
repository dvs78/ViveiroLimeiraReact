import React from "react";
import logo from "../../src/assets/logo/logo_verde_escuro.png";
import UserBottons from "./UserBottons";

const Header = () => {
  return (
    <header className="header">
      <a href="/">
        <img className="header__img" src={logo} alt="Logo da TL" />
      </a>
      <UserBottons />
    </header>
  );
};

export default Header;
