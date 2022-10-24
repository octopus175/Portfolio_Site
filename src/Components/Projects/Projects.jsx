import './Projects.style.css'
import ProjectData from './ProjectData'

function Projects() {
    const displayProjects = () => {
        return ProjectData.map((project, index) => {
            return (
                <div className='project-card' key={index}>
                    <span className='project-card-name'>{project.project_name}</span>
                    <a href={project.demo_link} target="_blank" rel="noreferrer">
                        <img alt='project_name' src={project.project_image} className='project-card-image'></img>
                    </a>
                    <div className='project-card-detail'>
                        <p className='project-card-detail-text'>
                            {project.description}
                        </p>
                        <div className='project-card-detail-techstacks'>
                            {project.tech_stack.map((tech) => {
                                return <span className='project-card-detail-techstacks-single'>{tech}</span>
                            })}
                        </div>
                        <div className='project-card-detail-links'>
                            <a href={project.github_link} target="_blank" rel="noreferrer" className='project-card-detail-url'>Github Repo</a>
                            <a href={project.demo_link} target="_blank" rel="noreferrer" className='project-card-detail-url'>Live Demo</a>
                        </div>
                    </div>
                </div>
            )
        })
        
    }

    return(
        <section id="projects" className='projects'>
            {displayProjects()}
        </section>
    )
}
export default Projects;