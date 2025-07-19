import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function HomePage() {
  const currentWorkProjects = [
    {
      title: "BookPath - AI Book Discovery Platform",
      image: "/images/bookpath_screenshot.png",
      url: "https://github.com/DrDevEli/bookpath-app",
      description: "BookPath is an AI-powered platform for discovering, collecting, and exploring books."
    }
  ];

  return (
    <>
      <div className={styles.container}>
        {/* NavBar*/}
        <nav className={`navbar navbar-expand-lg navbar-dark ${styles.navbar}`}>
          <Link className={`navbar-brand ${styles.navbarBrand}`} href="#home">Eliano Miguel</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse ${styles.imgTopContainer}`} id="navbarTogglerDemo01">
            <ul className="navbar-nav ms-auto">
              <li className={`nav-item ${styles.navItem}`}>
                <Link className={`nav-link ${styles.navLink}`} href="#home">Home</Link>
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

        {/* Hero Section */}
        <section className={`${styles.hero} ${styles.fadeIn}`} id="home">
          <h1>FullStack Developer</h1>
          <h2>I&apos;m Eliano Miguel</h2>
          <Image
            className={styles.profileImage}
            src="/images/perfil.fotoo.jpeg"
            alt="Eliano Miguel profile photo"
            width={300}
            height={300}
            priority
          />
        </section>
      </div>

      {/* Social Links */}
      <div className={styles.middleContainerFeatures}>
        <p className={styles.selfDescription}>
          I am a committed and enthusiastic developer with a strong passion for exploring diverse concepts
          and innovations in the tech industry.<br />
          Developer based in Berlin, Germany. 📍
        </p>
        <div className={styles.socialLinks}>
          <a aria-label="linkedin" rel="noreferrer" target="_blank"
            href="https://www.linkedin.com/in/eliano-miguel/">
            <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" width="64" height="64"
              viewBox="0 0 24 24" fill="none" stroke="#dbcd90" strokeWidth="2" strokeLinecap="round"
              strokeLinejoin="round">
              <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
              <path d="M8 11l0 5"></path>
              <path d="M8 8l0 .01"></path>
              <path d="M12 16l0 -5"></path>
              <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
            </svg>
          </a>
          <a aria-label="github" rel="noreferrer" target="_blank" href="https://github.com/DrDevEli">
            <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" width="64" height="64"
              viewBox="0 0 24 24" fill="none" stroke="#dbcd90" strokeWidth="2" strokeLinecap="round"
              strokeLinejoin="round">
              <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
            </svg>
          </a>
        </div>
      </div>

      {/* Skills Section */}
      <div className={styles.skills}>
        <h2>Tech Stack</h2>
        <hr className={styles.stackHr} />
        <div className={styles.logos}>
          <ul>
            <li>
              <Image
                className={styles.logosImg}
                src="https://skillicons.dev/icons?i=html,css,js,nodejs,express,postgresql,react,aws"
                alt="Expert in HTML5, CSS3, JavaScript, Node.js, Express.js, PostgreSQL, React.js, Web3, AWS"
                width={800}
                height={100}
                priority
              />
            </li>
          </ul>
        </div>
      </div>

      {/* Current Work Section */}
      <div className={`${styles.cardStyle} current-work-container`} style={{ margin: '50px auto', maxWidth: '1200px' }} id="current-work">
        <h1 style={{ color: 'var(--gold)', marginBottom: '30px', textAlign: 'center' }}>Current Work</h1>
        <div className="projects" style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '2rem' }}>
          {currentWorkProjects.map((project, index) => (
            <div key={`currentWork-${index}`} className={`${styles.cardStyle} current-project`} style={{ maxWidth: '600px', textAlign: 'center' }}>
              <div className={styles.projectImageContainer}>
                <a href={project.url} target="_blank" rel="noopener noreferrer">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={500}
                    height={300}
                    style={{ cursor: 'pointer' }}
                    className={styles.projectImage}
                  />
                </a>
              </div>
              <div style={{ marginTop: '1.5rem' }}>
                <h3 style={{ color: 'var(--gold)', marginBottom: '1rem', fontSize: '1.4rem' }}>{project.title}</h3>
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                  <a href={project.url} target="_blank" rel="noopener noreferrer" className={styles.buttonStyle}>
                    View Repository
                  </a>
                  <span style={{ 
                    display: 'inline-block', 
                    background: 'rgba(219, 205, 144, 0.1)', 
                    color: 'var(--gold)', 
                    padding: '0.5rem 1rem', 
                    borderRadius: '20px', 
                    fontSize: '0.9rem',
                    border: '1px solid var(--gold)'
                  }}>
                    🚀 In Development
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* About Section */}
      <div className={styles.middleContainerAbout} id="about">
        <Image
          className={styles.pcWithLights}
          src="/images/emile-perron-xrVDYZRGdw4-unsplash.jpg"
          alt="pc-and-notebooks"
          width={400}
          height={400}
        />
        <div className="about-content">
          <p>
            Hello, my name is Eliano, and I am a FullStack Developer with a strong passion for exploring and
            mastering a diverse range of technologies within the tech industry.
          </p>
          <p>
            My core expertise includes JavaScript, Node.js, and Express.js.
          </p>
        </div>
      </div>

      {/* Projects Section */}
      <div className={styles.middleContainerProjects} id="projects">
        <div className={styles.projects}>
          <h1>Projects</h1>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', margin: '2rem 0' }}>
            <div className={`${styles.cardStyle} project-showcase`}>
              <div className={styles.projectImageContainer}>
                <a href="https://github.com/DrDevEli/HTML_Basics" target="_blank" rel="noopener noreferrer">
                  <Image
                    src="/images/Angela-recipe-HTML.png"
                    alt="Angela-recipe"
                    width={400}
                    height={300}
                    style={{ cursor: 'pointer' }}
                    className={styles.projectImage}
                  />
                </a>
              </div>
              <h3 style={{ color: 'var(--gold)', textAlign: 'center', marginTop: '1rem' }}>HTML Basics</h3>
            </div>
            
            <div className={`${styles.cardStyle} project-showcase`}>
              <div className={styles.projectImageContainer}>
                <a href="https://github.com/DrDevEli/CSS_Basics" target="_blank" rel="noopener noreferrer">
                  <Image
                    src="/images/dev_com_design_project.png"
                    alt="webDesign-project"
                    width={400}
                    height={300}
                    style={{ cursor: 'pointer' }}
                    className={styles.projectImage}
                  />
                </a>
              </div>
              <h3 style={{ color: 'var(--gold)', textAlign: 'center', marginTop: '1rem' }}>CSS Basics</h3>
            </div>
            
            <div className={`${styles.cardStyle} project-showcase`}>
              <div className={styles.projectImageContainer}>
                <a href="https://github.com/DrDevEli/JavaScript-DOM_CHALLENGE-" target="_blank" rel="noopener noreferrer">
                  <Image
                    src="/images/Drum-kit-DOM.png"
                    alt="Drum-kit-project"
                    width={400}
                    height={300}
                    style={{ cursor: 'pointer' }}
                    className={styles.projectImage}
                  />
                </a>
              </div>
              <h3 style={{ color: 'var(--gold)', textAlign: 'center', marginTop: '1rem' }}>JavaScript DOM</h3>
            </div>
          </div>
          
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <a href="/projects" className={styles.buttonStyle}>
              View All Projects
            </a>
          </div>
        </div>
      </div>

      {/* Contact Section*/}
      <div className={styles.bottomContainerContact}>
        <div className={styles.contact} id="contact">
          <h1>Contact me</h1>
          <p>📧 e.m.arnald@gmail.com</p>
          <p>📍 Berlin, Germany</p>
          
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <a href="/contact" style={{ 
              display: 'inline-block', 
              background: 'rgba(219, 205, 144, 0.1)', 
              color: 'var(--gold)', 
              padding: '0.75rem 1.5rem', 
              borderRadius: '20px', 
              fontSize: '1rem',
              border: '1px solid var(--gold)',
              textDecoration: 'none',
              transition: 'var(--transition)'
            }}>
              Get In Touch
            </a>
          </div>
        </div>

        {/* Footer */}
        <footer>
          <div className={styles.bottomFooter}>
            <a aria-label="linkedin" rel="noreferrer" target="_blank"
              href="https://www.linkedin.com/in/eliano-miguel/">
              <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" width="64" height="64"
                viewBox="0 0 24 24" fill="none" stroke="#dbcd90" strokeWidth="2" strokeLinecap="round"
                strokeLinejoin="round">
                <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                <path d="M8 11l0 5"></path>
                <path d="M8 8l0 .01"></path>
                <path d="M12 16l0 -5"></path>
                <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
              </svg>
            </a>
            <a aria-label="github" rel="noreferrer" target="_blank" href="https://github.com/DrDevEli">
              <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" width="64" height="64"
                viewBox="0 0 24 24" fill="none" stroke="#dbcd90" strokeWidth="2" strokeLinecap="round"
                strokeLinejoin="round">
                <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
              </svg>
            </a>
          </div>
        </footer>
      </div>
    </>
  );
}
