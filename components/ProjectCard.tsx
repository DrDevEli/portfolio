import Image from 'next/image';
import Link from 'next/link';

interface ProjectCardProps {
  id: string;
  src: string;
  alt: string;
  repoUrl: string;
}

export default function ProjectCard({ id, src, alt, repoUrl }: ProjectCardProps) {
  return (
    <div className="project-card">
      <Link href={repoUrl} target="_blank" rel="noopener noreferrer">
        <Image
          id={id}
          src={src}
          alt={alt}
          width={400}
          height={300}
          className="project-image"
        />
      </Link>
    </div>
  );
}
