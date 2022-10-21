import './Projects.style.css'
import image from '../../Assets/Images/to-do-list-app.png'

function Projects() {
    const displayProjects = () => {
        return (
            <div className='project-card'>
                <img alt='project_name' src={image} className='project-card-image'></img>
                <div className='project-card-detail'>
                    <p className='project-card-detail-text'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    </p>
                    <div className='project-card-detail-techstacks'>

                    </div>
                    <div className='project-card-detail-links'>
                        <a href='https://github.com/octopus175/to-do-list-app' target="_blank" rel="noreferrer">Github Repo</a>
                        <a href='https://steady-tiramisu-94515d.netlify.app/' target="_blank" rel="noreferrer">Live Demo</a>
                    </div>
                </div>
            </div>
        )
    }

    return(
        <section id="projects" className='projects'>
            <div>
                {displayProjects()}
            </div>
        </section>
    )
}
export default Projects;