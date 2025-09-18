import { GiHamburgerMenu } from "react-icons/gi";
import {UseState} from "react";
import "./Header.css"; 

function Header() {
  const [Isopen, setIsopen] = UseState(false);
  const toggleMenu = () => {
    setIsopen(!Isopen);
  }
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
          <li class="nav-item" onClick={toggleMenu}><GiHamburgerMenu /></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
