import Head from 'next/head'
import Image from 'next/image'
import ProjectImage from '../components/ProjectImage'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Eliano Miguel Arnaldo</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>


      <div className={styles.container}>
        {/* NavBar*/}
        <nav className={`navbar navbar-expand-lg navbar-dark ${styles.navbar}`}>
          <a className={`navbar-brand ${styles.navbarBrand}`} href="#home">Eliano Miguel</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse ${styles.imgTopContainer}`} id="navbarTogglerDemo01">
            <ul className="navbar-nav ms-auto">
              <li className={`nav-item ${styles.navItem}`}>
                <a className={`nav-link ${styles.navLink}`} href="#home">Home</a>
              </li>
              <li className={`nav-item ${styles.navItem}`}>
                <a className={`nav-link ${styles.navLink}`} href="#about">About</a>
              </li>
              <li className={`nav-item ${styles.navItem}`}>
                <a className={`nav-link ${styles.navLink}`} href="#projects">Projects</a>
              </li>
              <li className={`nav-item ${styles.navItem}`}>
                <a className={`nav-link ${styles.navLink}`} href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </nav>
        <hr />

        {/* Hero Section */}
        <section className={styles.hero} id="home">
          <h1>FullStack Developer</h1>
          <h2>I'm Eliano Miguel</h2>
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
              <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2
-2z"></path>
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
              <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5
-6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5
-1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5
2v3.5"></path>
            </svg>
          </a>
        </div>
      </div>{/* Skills Section */}
      <div className={styles.skills}>
        <p>Tech Stack</p>
        <hr className={styles.stackHr} />
        <div className={styles.logos}>
          <ul>
            <li>
              <Image
                className={styles.logosImg}
                src="https://skillicons.dev/icons?i=html,css,bootstrap,js,jquery,express,nodejs"
                alt="Technology stack icons"
                width={800}
                height={100}
                priority
              />
            </li>
          </ul>
        </div>
      </div>

      {/* Current Work Section */}
      <div className={styles.currentWorkContainer} id="current-work">
        <h1>Current Work</h1>
        <div className={styles.projects}>
          <ProjectImage
            id="currentWork1"
            src="/images/project1.jpg"
            alt="Current project 1"
            repoUrl="https://github.com/DrDevEli/dbank2"
          />
          <ProjectImage
            id="currentWork2"
            src="/images/project2.jpg"
            alt="Current project 2" 
            repoUrl="https://github.com/DrDevEli/booksServiceApi"
          />
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
        <p>
          Hello, my name is Eliano, and I am a FullStack Developer with a strong passion for exploring and
          mastering a diverse range of technologies within the tech industry.<br /><br />
          My core expertise includes JavaScript, Node.js, and Express.js.
        </p>
      </div>

      {/* Projects Section */}
      <div className={styles.middleContainerProjects} id="projects">
        <div className={styles.projects}>
          <h1>Projects</h1>
          <ProjectImage
            id="projectsHTML"
            src="/images/Angela-recipe-HTML.png"
            alt="Angela-recipe"
            repoUrl="https://github.com/DrDevEli/recipe-html-project"
          />
          <h3>HTML</h3>
          <ProjectImage
            id="projectsCSS"
            src="/images/dev_com_design_project.png"
            alt="webDesign-project"
            repoUrl="https://github.com/DrDevEli/dev-com-design-project"
          />
          <h3>CSS</h3>
          <ProjectImage
            id="projectsJS"
            src="/images/Drum-kit-DOM.png"
            alt="Drum-kit-project"
            repoUrl="https://github.com/DrDevEli/drum-kit-dom"
          />
          <h3>JavaScript</h3>
        </div>
      </div>

      {/* Contact Section*/}
      <div className={styles.bottomContainerContact}>
        <div className={styles.contact} id="contact">
          <h1>Contact me</h1><br />
          <p>Email: e.m.arnald@gmail.com</p>
          <p>Location: Berlin, Germany</p>
        </div>

        {/* Footer */}
        <footer>
          <div className={styles.bottomFooter}>
            <a aria-label="linkedin" rel="noreferrer" target="_blank"
              href="https://www.linkedin.com/in/eliano-miguel/">
              <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" width="64" height="64"
                viewBox="0 0 24 24" fill="none" stroke="#dbcd90" strokeWidth="2" strokeLinecap="round"
                strokeLinejoin="round">
                <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2
-2z"></path>
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
                <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 
-6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5    
-1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5
2v3.5">

                </path>
              </svg>
            </a>
          </div>
        </footer>
      </div>
    </>
  )
}
