
import "./Hero.css";
import fotoDePerfil from '../assets/perfil.png';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <p>Olá, meu nome é</p>
        <h1>Joel Felipe Costa</h1>
        <h2>Desenvolvedor Full-stack</h2>
        <p>
          Tenho experiência em criar interfaces web dinâmicas e responsivas e em construir a lógica de sistemas completos. Com
          experiência em React, JavaScript ,CSS, TailwindCSS,sBootstrap, PHP e Laravel busco construir sistemas
          elegantes e eficientes.
        </p>
        <div className="hero-buttons">
          <a href="#contato" className="button primary">
            Contrate-me
          </a>
          <a href="#projetos" className="button secondary">
           Projetos
          </a>
        </div>
      </div>
      <div className="hero-image">
       
        <img
          src={fotoDePerfil}
          alt="Sua foto de perfil"
        />
      </div>
    </section>
  );
}

export default Hero;
