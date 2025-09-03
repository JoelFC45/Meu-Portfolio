// src/components/AboutSection.jsx

import './AboutSection.css';

function AboutSection() {
  return (
    <section id="sobre" className="about-section">
      <div className="about-content">
        <h2>Sobre Mim</h2>
        <div className="about-layout">
          <div className="about-text">
            <p>
              Olá! Sou Elton, um desenvolvedor front-end apaixonado por construir interfaces bonitas e funcionais. Minha jornada na programação começou com o desejo de transformar ideias criativas em realidade digital.
            </p>
            <p>
              Tenho focado em aprender e me aprofundar no ecossistema JavaScript, especialmente com React, para criar aplicações web modernas e responsivas. Adoro o desafio de resolver problemas complexos e estou sempre em busca de novas tecnologias para aprender.
            </p>
            <p>
              Quando não estou codando, gosto de [seu hobby aqui, ex: jogar video game, ler sobre tecnologia, etc.].
            </p>
          </div>
          <div className="about-skills">
            <h3>Minhas Habilidades</h3>
            <ul>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>JavaScript (ES6+)</li>
              <li>React</li>
              <li>Git & GitHub</li>
              <li>Design Responsivo</li>
              <li>Node.js (Básico)</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;