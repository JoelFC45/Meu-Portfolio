

import './Footer.css';

import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contato" className="footer">
      <div className="footer-content">
        <h3>Entre em Contato</h3>
        <p>
          Estou disponível para novas oportunidades e projetos.
          <br />
          Sinta-se à vontade para entrar em contato comigo!
        </p>
        <div className="social-links">
          <a href="https://github.com/JoelFC45" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/seu-usuario" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="joelfelipecosta309@gmail.com" target="_blank" rel="noopener noreferrer">
            <FaEnvelope />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {currentYear} Joel Felipe. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;