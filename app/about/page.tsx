import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/Home.module.css';

export default function AboutPage() {
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

      <div className={styles.aboutPage}>
        <div className={styles.middleContainerAbout}>
          <h1 className={styles.fadeIn}>About Me</h1>
          
          <Image
            className={styles.pcWithLights}
            src="/images/emile-perron-xrVDYZRGdw4-unsplash.jpg"
            alt="Developer workspace with computer and notebooks"
            width={400}
            height={400}
          />
          
          <div className="about-content">
            <p>
              Hello, my name is Eliano Miguel, and I am a FullStack Developer with a strong passion for exploring and
              mastering a diverse range of technologies within the tech industry.
            </p>
            
            <p>
              My core expertise includes JavaScript, Node.js, and Express.js. I am committed and enthusiastic about
              developing innovative solutions and staying up-to-date with the latest trends in web development.
            </p>
            
            <p>
              Currently based in Berlin, Germany 📍, I enjoy working on challenging projects that allow me to
              grow professionally while contributing to meaningful digital experiences.
            </p>
          </div>

          {/* Skills Section */}
          <div className={`${styles.skills} ${styles.fadeIn}`}>
            <h2>Tech Stack</h2>
            <hr className={styles.stackHr} />
            <div className={styles.logos}>
              <Image
                className={styles.logosImg}
                src="https://skillicons.dev/icons?i=html,css,js,nodejs,express,postgresql,react,aws"
                alt="Expert in HTML5, CSS3, JavaScript, Node.js, Express.js, PostgreSQL, React.js, AWS"
                width={800}
                height={100}
                priority
              />
            </div>
          </div>

          {/* Contact Information */}
          <div className={`${styles.cardStyle} ${styles.fadeIn}`} style={{ marginTop: '2rem', textAlign: 'center' }}>
            <h2 style={{ color: 'var(--gold)', marginBottom: '1rem' }}>Get In Touch</h2>
            <p style={{ marginBottom: '0.5rem' }}>📧 e.m.arnald@gmail.com</p>
            <p style={{ marginBottom: '1.5rem' }}>📍 Berlin, Germany</p>
            
            <div className={styles.socialLinks}>
              <a aria-label="LinkedIn Profile" rel="noreferrer" target="_blank"
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
              <a aria-label="GitHub Profile" rel="noreferrer" target="_blank" href="https://github.com/DrDevEli">
                <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" width="64" height="64"
                  viewBox="0 0 24 24" fill="none" stroke="#dbcd90" strokeWidth="2" strokeLinecap="round"
                  strokeLinejoin="round">
                  <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 