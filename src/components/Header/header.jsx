import { GiHamburgerMenu } from "react-icons/gi";
import "./Header.css"; 
 
import { useState } from "react";

function Header() { 
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
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
        </ul>
       <div className={isOpen ?  "hamburger-menu" : "hidden-menu"} onClick={toggleMenu}>
            <GiHamburgerMenu />
        </div>
      <aside className={isOpen ? "menu-open" : "hidden"}>
        <ul className="menu-links">
          <li onClick={toggleMenu}>X</li>
          <li><a href="/" onClick={toggleMenu}>Home</a></li>
          <li><a href="#projetos" onClick={toggleMenu}>Projetos</a></li>
            <li><a href="#sobre" onClick={toggleMenu}>Sobre</a></li>
          <li><a href="/contato" onClick={toggleMenu}>Contato</a></li>
        </ul>
      </aside>
      </nav>
    </header>
  );
}

export default Header;
