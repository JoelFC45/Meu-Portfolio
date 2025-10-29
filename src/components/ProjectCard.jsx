
import "./ProjectCard.css";


function ProjectCard(props) {
  return (
    <div className="project-card" data-aos = 'fade-down'>
      <div className="project-info">
        <h3 className="project-title">{props.title}</h3>
        <p className="project-description">{props.description}</p>
        <div className="project-links">
          <a href={props.repoUrl} target="_blank" rel="noopener noreferrer">
            Repositório
          </a>
          <a href={props.demoUrl} target="_blank" rel="noopener noreferrer">
            Ver Demo
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
