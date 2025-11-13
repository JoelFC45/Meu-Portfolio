// src/components/AboutSection.jsx

import './AboutSection.css';

function AboutSection() {
  return (
    <section id="sobre" className="about-section">
      <div className="about-content" data-aos = "fade-down">
        <h2>Sobre Mim</h2>
        <div className="about-layout">
          <div className="about-text" >
            <p>
              Olá! Sou Joel, um desenvolvedor Full-stack apaixonado por construir sistemas organizados com interfaces bonitas e funcionais. Minha jornada na programação tem como objetivo criar soluções e tecnologias que ajudem e façam diferença para as pessoas.
            </p>
            <p>
              Tenho focado em aprender e me aprofundar no ecossistema JavaScript, especialmente com React e Node, para criar aplicações web modernas e responsivas. Já tenho certa experiência com o ecosistema PHP e estou sempre em busca de novas tecnologias para aprender.
            </p>
           
          </div>
          <div className="about-skills" data-aos ="slide-right">
            <h3>Minhas Habilidades</h3>
            <ul>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>JavaScript (ES6+)</li>
              <li>React</li>
              <li>Git & GitHub</li>
              <li>Design Responsivo</li>
              <li>Node.js</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;