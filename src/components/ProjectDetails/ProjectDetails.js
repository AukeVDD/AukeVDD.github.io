import './ProjectDetails.css'
import { projects } from '../../portfolio'

const ProjectDetails = () => (
  <section className='section project-details' id='project-details'>
    <h2 className='section__title'>Project Details</h2>
    {projects.map((project) => (
      <div key={project.name} className='project-details__content' id={project.id}>
        <div className='project-details__images'>
          {project.image && (
            <img src={project.image} alt={`${project.name} logo`} className='project-details__image' />
          )}
        </div>
        <div className='project-details__text'>
          <h3>{project.name}</h3>
          <p>{project.description}</p>
          <p>Stack: {project.stack.join(', ')}</p>
          {project.sourceCode && (
            <a href={project.sourceCode} className='link link--icon'>
              Source Code
            </a>
          )}
          {project.livePreview && (
            <a href={project.livePreview} className='link link--icon'>
              Live Preview
            </a>
          )}
        </div>
      </div>
    ))}
  </section>
)

export default ProjectDetails
