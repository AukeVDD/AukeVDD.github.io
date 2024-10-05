import './ProjectDetails.css'
import { projects } from '../../portfolio'

const ProjectDetails = () => (
  <section className='section project-details' id='project-details'>
    <h2 className='section__title'>Project Details</h2>
    {projects.map((project) => (
      <div key={project.name} className='project-details__content' id={project.id}>
        <div className='project-details__images'>
          {project.images && project.images.map((image, index) => (
            <img 
              key={image}  // Use the image URL as the key
              src={image} 
              alt={`${project.name} ${index + 1}`} 
              className='project-details__image' 
            />
          ))}
        </div>
        <div className='project-details__text'>
          <h3>{project.name}</h3>
          <p>{project.details}</p>
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
