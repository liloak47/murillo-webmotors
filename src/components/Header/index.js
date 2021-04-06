import React from "react";
import "./style.scss";
import logo from "../../assets/images/webmotors.svg";
import logoIcon from "../../assets/images/icon-logo.png";

const Header = () => {
  return (
    <header>
      <div>
        <figure>
          <img src={logo} alt="logo" />
        </figure>
        <ul>
          <li>
            <p>Comprar</p>
          </li>
          <li>
            <p>Vender</p>
          </li>
          <li>
            <p>Serviços</p>
          </li>
          <li>
            <p>Ajuda</p>
          </li>
          <li>
            <img src={logoIcon} className="logoIcon" alt="" />
            <p>Entrar</p>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
