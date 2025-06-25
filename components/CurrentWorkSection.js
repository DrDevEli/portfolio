import ProjectImage from './ProjectImage'

export default function CurrentWorkSection({ projects }) {
  return (
    <div className="currentWorkContainer" id="current-work">
      <h1>Current Work</h1>
      <div className="projects">
        {projects.map((project, index) => (
          <ProjectImage
            key={`currentWork-${index}`}
            id={`currentWork${index}`}
            src={project.image}
            alt={project.title}
            repoUrl={project.url}
          />
        ))}
      </div>
    </div>
  )
}
