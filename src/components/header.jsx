

import "./Header.css"; 

function Header() {
  return (
    <header className="header-container">
      <nav className="navbar">
        <a href="/" className="nav-logo">
          Meu Portfólio
        </a>
        <ul className="nav-menu">
          <li>
            <a href="#projetos">Projetos</a>
          </li>
          <li>
            <a href="#sobre">Sobre</a>
          </li>
          <li>
            <a href="#contato">Contato</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
