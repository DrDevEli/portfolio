import Image from 'next/image';
import Link from 'next/link';

export default function ProjectImage({ id, src, alt, repoUrl }) {
  return (
    <div className="project-image-container">
      <Link href={repoUrl} target="_blank" rel="noopener noreferrer">
        <Image
          id={id}
          src={src}
          alt={alt}
          width={400}
          height={300}
          style={{ cursor: 'pointer' }}
          className="project-image"
        />
      </Link>
    </div>
  );
}
