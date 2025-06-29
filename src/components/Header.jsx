import React from "react";
import logo from "../../src/assets/logo/tlSolucoesAmbientaisVerde.png";
import UserBottons from "./UserBottons";
import { useLocation, Link } from "react-router-dom";

const Header = () => {
  const { pathname } = useLocation();
  const completeHeader = (
    <header className="header">
      <Link to="/">
        <img className="header__img--home" src={logo} alt="Logo da TL" />
      </Link>
      <UserBottons />
    </header>
  );

  const simpleHeader = (
    <header className="header">
      <Link to="/">
        <img className="header__img--paginas" src={logo} alt="Logo da TL" />
      </Link>
    </header>
  );
  return <>{pathname === "/" ? completeHeader : simpleHeader}</>;
};

export default Header;
