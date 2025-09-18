import { GiHamburgerMenu } from "react-icons/gi";
import {UseState} from "react";
import "./Header.css"; 

function Header() {
  return (
    <header className="header-container">
      <nav className="navbar">
        <a href="/" className="nav-logo">
          Meu Portfólio
        </a>
        <ul className="nav-menu">
          <li className="nav-item">
            <a href="#projetos">Projetos</a>
          </li>
          <li className="nav-item">
            <a href="#sobre">Sobre</a>
          </li>
          <li className="nav-item">
            <a href="#contato">Contato</a>
          </li>
          <li><GiHamburgerMenu /></li>
        </ul>
      </nav>
      <aside>
        <ul className="sidebar-menu">
          <li className="side-item">
            <a href="#projetos">Projetos</a>
          </li>
          <li className="side-item">
            <a href="#sobre">Sobre</a>
          </li>
          <li className="side-item">
            <a href="#contato">Contato</a>
          </li>
        </ul>
      </aside>
    </header>
  );
}

export default Header;
