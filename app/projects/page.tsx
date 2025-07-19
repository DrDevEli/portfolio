import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/Home.module.css';
import type { Project } from '../../types/project';

const projects: Project[] = [
  {
    id: "5",
    title: "BookPath - AI Book Discovery Platform",
    description: "BookPath is an AI-powered platform for discovering, collecting, and exploring books.",
    image: "/images/bookpath_screenshot.png",
    url: "https://github.com/DrDevEli/bookpath-app"
  },
  {
    id: "4",
    title: "Portfolio Website",
    description: "Modern portfolio website built with Next.js, TypeScript, and responsive design to showcase my development skills.",
    image: "/images/portfolio_sreenshot.png",
    url: "https://github.com/DrDevEli/portfolio"
  },
  {
    id: "3",
    title: "JavaScript DOM Challenge - Drum Kit",
    description: "An interactive drum kit application built with vanilla JavaScript, focusing on DOM manipulation and event handling.",
    image: "/images/Drum-kit-DOM.png", 
    url: "https://github.com/DrDevEli/JavaScript-DOM_CHALLENGE-"
  },
  {
    id: "2", 
    title: "CSS Basics - Web Design Project",
    description: "A modern web design project showcasing advanced CSS techniques, animations, and responsive design principles.",
    image: "/images/dev_com_design_project.png",
    url: "https://github.com/DrDevEli/CSS_Basics"
  },
  {
    id: "1",
    title: "HTML Basics - Angela Recipe",
    description: "A responsive recipe website built with semantic HTML, demonstrating proper HTML structure and accessibility best practices.",
    image: "/images/Angela-recipe-HTML.png",
    url: "https://github.com/DrDevEli/HTML_Basics"
  }
];

export default function ProjectsPage() {
  return (
    <>
      {/* NavBar */}
      <nav className={`navbar navbar-expand-lg navbar-dark ${styles.navbar}`}>
        <Link className={`navbar-brand ${styles.navbarBrand}`} href="/">Eliano Miguel</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${styles.imgTopContainer}`} id="navbarTogglerDemo01">
          <ul className="navbar-nav ms-auto">
            <li className={`nav-item ${styles.navItem}`}>
              <Link className={`nav-link ${styles.navLink}`} href="/">Home</Link>
            </li>
            <li className={`nav-item ${styles.navItem}`}>
              <Link className={`nav-link ${styles.navLink}`} href="/about">About</Link>
            </li>
            <li className={`nav-item ${styles.navItem}`}>
              <Link className={`nav-link ${styles.navLink}`} href="/projects">Projects</Link>
            </li>
            <li className={`nav-item ${styles.navItem}`}>
              <Link className={`nav-link ${styles.navLink}`} href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
      <hr />

      <div className={styles.projectsPage}>
        <div className={styles.middleContainerProjects}>
          <div className={styles.projects}>
            <h1 className={styles.fadeIn}>My Projects</h1>
            <p style={{ fontSize: '1.2rem', maxWidth: '800px', textAlign: 'center', marginBottom: '2rem' }}>
              Here are some of the projects I&apos;ve worked on, showcasing my skills in web development:
            </p>
            
            <div className={styles.projectsGrid}>
              {projects.map((project, index) => (
                <div key={project.id} className={`${styles.cardStyle} ${styles.projectCard}`} style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className={styles.projectImageContainer}>
                    <Link href={project.url} target="_blank" rel="noopener noreferrer">
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={400}
                        height={300}
                        style={{ cursor: 'pointer' }}
                        className={styles.projectImage}
                      />
                    </Link>
                  </div>
                  
                  <div className={styles.projectInfo}>
                    <h3 style={{ color: 'var(--gold)', marginBottom: '0.5rem', fontSize: '1.3rem' }}>{project.title}</h3>
                    <p style={{ marginBottom: '1rem', fontSize: '1rem', lineHeight: '1.6' }}>{project.description}</p>
                    
                    <Link 
                      href={project.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={styles.buttonStyle}
                      style={{ display: 'inline-block' }}
                    >
                      View on GitHub →
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Technology Categories */}
            <div className="tech-categories">
              <h2 className={styles.fadeIn} style={{ color: 'var(--gold)', textAlign: 'center', marginBottom: '2rem', fontSize: '2rem' }}>
                Technologies Used
              </h2>
              
              <div className={styles.techGrid}>
                <div className={`${styles.cardStyle} ${styles.techCategory}`}>
                  <h3 style={{ color: 'var(--gold)', marginBottom: '1rem' }}>Frontend</h3>
                  <ul style={{ listStyle: 'none', padding: 0 }}>
                    <li>→ HTML5 & Semantic Markup</li>
                    <li>→ CSS3 & Advanced Styling</li>
                    <li>→ JavaScript ES6+</li>
                    <li>→ React & Next.js</li>
                    <li>→ TypeScript</li>
                    <li>→ Responsive Design</li>
                  </ul>
                </div>
                
                <div className={`${styles.cardStyle} ${styles.techCategory}`}>
                  <h3 style={{ color: 'var(--gold)', marginBottom: '1rem' }}>Backend</h3>
                  <ul style={{ listStyle: 'none', padding: 0 }}>
                    <li>→ Node.js</li>
                    <li>→ Express.js</li>
                    <li>→ RESTful APIs</li>
                    <li>→ Database Integration</li>
                  </ul>
                </div>
                
                <div className={`${styles.cardStyle} ${styles.techCategory}`}>
                  <h3 style={{ color: 'var(--gold)', marginBottom: '1rem' }}>Tools & Frameworks</h3>
                  <ul style={{ listStyle: 'none', padding: 0 }}>
                    <li>→ Bootstrap</li>
                    <li>→ jQuery</li>
                    <li>→ Git & GitHub</li>
                    <li>→ CSS Modules</li>
                    <li>→ Webpack</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Current Work Section */}
            <div className={`${styles.cardStyle} current-work-section`} style={{ textAlign: 'center', marginTop: '3rem' }}>
              <h2 style={{ color: 'var(--gold)', marginBottom: '1rem' }}>Current Work</h2>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                I&apos;m currently working on expanding my portfolio with more complex full-stack applications
                and exploring modern development practices. Stay tuned for more projects!
              </p>
              <Link href="/contact" className={styles.buttonStyle}>
                Let&apos;s Collaborate
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 