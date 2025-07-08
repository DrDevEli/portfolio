import Image from 'next/image';
import Link from 'next/link';

interface ProjectCardProps {
  id: string;
  src: string;
  alt: string;
  repoUrl: string;
  title?: string;
  description?: string;
}

export default function ProjectCard({ 
  id, 
  src, 
  alt, 
  repoUrl,
  title,
  description 
}: ProjectCardProps) {
  return (
    <div className="project-card p-4 border rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <Link href={repoUrl} target="_blank" rel="noopener noreferrer">
        <Image
          id={id}
          src={src}
          alt={alt}
          width={400}
          height={300}
          className="project-image rounded-t-lg object-cover"
        />
      </Link>
      <div className="p-4">
        {title && <h3 className="text-xl font-bold">{title}</h3>}
        {description && <p className="text-gray-600 mt-2">{description}</p>}
      </div>
    </div>
  );
}
