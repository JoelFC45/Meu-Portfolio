
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ProjectCard from "../ProjectCard/ProjectCard";
import "./ProjectsSection.css";

function ProjectsSection() {
  return (
    <section id="projetos" className="projects-section">
      <h2>Meus Projetos</h2>

      <Swiper
        
        modules={[Navigation, Pagination]}
        
        slidesPerView={1}
        
        spaceBetween={30}
  
        navigation
        
        pagination={{ clickable: true }}
        
        breakpoints={{
         
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
       
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <ProjectCard
            title="TO-DO list"
            description="Meu primeiro projeto usando javascript! Nesse projeto aprendi a usar o display flex e começar a entender o DOM do javascript. Além disso usei o tailwindcss."
            repoUrl="https://github.com/JoelFC45/TO-DO-list-app.git"
            demoUrl="https://to-doli2t.netlify.app/"
          />
        </SwiperSlide>   
        <SwiperSlide>
          <ProjectCard
            title="Calculadora"
            description="A clássica calculadora, esse projeto foi vital para aprender a aplicar a linguagem no desenvolvimento web e dominar o DOM, além disso afiei meus conhecimentos em relação ao grid do CSS."
            repoUrl="https://github.com/JoelFC45/Calculator.git"
            demoUrl="https://calculato17.netlify.app/"
          />
        </SwiperSlide>

       
        <SwiperSlide>
          <ProjectCard
            title ="Admnistrador de Apiarios"
            description="Uma aplicação feita em Laravel onde fui responsavel em representar os clientes,auxiliar no projeto do banco de dados e pela progamação responsíva em bootstrap."
            repoUrl="https://github.com/pedrohenriqux/appario"
            demoUrl="https://appario-ld5k.onrender.com/"
          />
        </SwiperSlide>
           <SwiperSlide>
          <ProjectCard
            title ="portfolio"
            description="Este portfolio foi feito em Reactjs."
            repoUrl="https://github.com/JoelFC45/Meu-Portfolio.git"
            demoUrl="#home"
          />
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default ProjectsSection;
