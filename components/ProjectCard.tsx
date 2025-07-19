import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { Project } from '../types/project';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="project-image-container">
      <Link href={project.url} target="_blank" rel="noopener noreferrer">
        <Image
          src={project.image}
          alt={project.title}
          width={400}
          height={300}
          style={{ cursor: 'pointer' }}
          className="project-image"
        />
      </Link>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
    </div>
  );
};

export default ProjectCard;
