
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ProjectCard from "./ProjectCard";
import "./ProjectsSection.css";
import todolist from '../assets/todolist.png'
import appario from '../assets/appario.png'

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
            imageUrl = {todolist}
            title="Meu Primeiro Projeto"
            description="Meu primeiro projeto com javascript! Ele foi vital para aprender a aplicar a linguagem no desenvolvimento web e também foi usado TailwindCSS."
            repoUrl="https://github.com/JoelFC45/TO-DO-list-app.git"
            demoUrl="https://to-doli2t.netlify.app/"
          />
        </SwiperSlide>

       
        <SwiperSlide>
          <ProjectCard
            imageUrl= {appario}
            title ="Admnistrador de Apiarios"
            description="Uma aplicação feita em Laravel onde fui responsavel em representar os clientes,auxiliar no projeto do banco de dados e pela progamação responsíva em bootstrap."
            repoUrl="https://github.com/pedrohenriqux/appario"
            demoUrl="https://appario-ld5k.onrender.com/"
          />
        </SwiperSlide>

      </Swiper>
    </section>
  );
}

export default ProjectsSection;
