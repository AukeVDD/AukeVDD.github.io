import uniqid from 'uniqid'
import GitHubIcon from '@material-ui/icons/GitHub'
import LaunchIcon from '@material-ui/icons/Launch'
import './ProjectContainer.css'

const ProjectContainer = ({ project }) => {
  const scrollToDetails = () => {
    const detailsSection = document.getElementById(`${project.id}`); // Fixed: Use template literal
    if (detailsSection) {
      detailsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className='project'
      onClick={scrollToDetails}
      onKeyPress={(e) => {
        if (e.key === 'Enter') scrollToDetails();
      }}
      role='button'
      tabIndex={0}
    >
      <h3>{project.name}</h3>

      <p className='project__description'>{project.description}</p>
      {project.image && (
        <img src={project.image} alt={`${project.name} screenshot`} className='project__image' />
      )}
      {project.stack && (
        <ul className='project__stack'>
          {project.stack.map((item) => (
            <li key={uniqid()} className='project__stack-item'>
              {item}
            </li>
          ))}
        </ul>
      )}

      {project.sourceCode && (
        <a
          href={project.sourceCode}
          aria-label='source code'
          className='link link--icon'
        >
          <GitHubIcon />
        </a>
      )}

      {project.livePreview && (
        <a
          href={project.livePreview}
          aria-label='live preview'
          className='link link--icon'
        >
          <LaunchIcon />
        </a>
      )}
    </div>
  );
};

export default ProjectContainer
