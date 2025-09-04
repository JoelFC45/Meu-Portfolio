
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";


import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


import ProjectCard from "./ProjectCard";
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
            imageUrl="https://via.placeholder.com/400x200.png?text=Projeto+1"
            title="Meu Primeiro Projeto"
            description="Meu primeiro projeto com javascript! Ele foi vital para aprender a aplicar a linguagem no desenvolvimento web e também foi usado TailwindCSS."
            repoUrl="https://github.com/JoelFC45/TO-DO-list-app.git"
            demoUrl="https://to-doli2t.netlify.app/"
          />
        </SwiperSlide>

       
        <SwiperSlide>
          <ProjectCard
            imageUrl="https://via.placeholder.com/400x200.png?text=Projeto+2"
            title="Admnistrador de Apiarios"
            description="Uma aplicação feita em Laravel onde fui responsavel em representar os clientes,auxiliar no projeto do banco de dados e pela progamação responsíva em bootstrap."
            repoUrl="#"
            demoUrl="#"
          />
        </SwiperSlide>

        <SwiperSlide>
          <ProjectCard
            imageUrl="https://via.placeholder.com/400x200.png?text=Projeto+3"
            title="Software para salão de beleza"
            description="Um site simples feito em PHP e bootstrap para um salão local."
            repoUrl="#"
            demoUrl="#"
          />
        </SwiperSlide>

       
        <SwiperSlide>
          <ProjectCard
            imageUrl="https://via.placeholder.com/400x200.png?text=Projeto+4"
            title="API de Blog"
            description="Desenvolvimento de uma API RESTful com Node.js e Express para gerenciar posts e usuários de um blog."
            repoUrl="#"
            demoUrl="#"
          />
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default ProjectsSection;
