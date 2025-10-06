import { GiHamburgerMenu } from "react-icons/gi";
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
         {/*<li><GiHamburgerMenu /></li>*/}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
