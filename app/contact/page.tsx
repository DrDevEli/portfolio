import Link from 'next/link';
import styles from '../../styles/Home.module.css';

export default function ContactPage() {
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

      <div className={styles.contactPage}>
        <div className={styles.bottomContainerContact}>
          <div className={styles.contact}>
            <h1 className={styles.fadeIn}>Contact Me</h1>
            <p style={{ fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto 2rem' }}>
              Let&apos;s connect! I&apos;m always interested in discussing new opportunities, collaborations, or just having a conversation about technology.
            </p>
            
            <div className={styles.contactMethods}>
              <div className={`${styles.cardStyle} ${styles.contactMethod}`}>
                <h3 style={{ color: 'var(--gold)', marginBottom: '1rem' }}>📧 Email</h3>
                <a href="mailto:e.m.arnald@gmail.com" className={styles.buttonStyle}>
                  e.m.arnald@gmail.com
                </a>
              </div>
              
              <div className={`${styles.cardStyle} ${styles.contactMethod}`}>
                <h3 style={{ color: 'var(--gold)', marginBottom: '1rem' }}>📍 Location</h3>
                <p style={{ fontSize: '1.1rem', marginBottom: '0' }}>Berlin, Germany</p>
              </div>
              
              <div className={`${styles.cardStyle} ${styles.contactMethod}`}>
                <h3 style={{ color: 'var(--gold)', marginBottom: '1rem' }}>💼 Professional</h3>
                <p style={{ fontSize: '1.1rem', marginBottom: '0' }}>Open to full-time opportunities and freelance projects</p>
              </div>
            </div>

            {/* Social Links */}
            <div className={`${styles.cardStyle} social-section`} style={{ marginTop: '3rem' }}>
              <h2 style={{ color: 'var(--gold)', marginBottom: '2rem', textAlign: 'center' }}>Connect With Me</h2>
              <div className={styles.socialLinks}>
                <a aria-label="LinkedIn Profile" rel="noreferrer" target="_blank"
                  href="https://www.linkedin.com/in/eliano-miguel/"
                  className={styles.socialLink}>
                  <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" width="64" height="64"
                    viewBox="0 0 24 24" fill="none" stroke="#dbcd90" strokeWidth="2" strokeLinecap="round"
                    strokeLinejoin="round">
                    <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                    <path d="M8 11l0 5"></path>
                    <path d="M8 8l0 .01"></path>
                    <path d="M12 16l0 -5"></path>
                    <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
                  </svg>
                  <span style={{ marginTop: '0.5rem', fontWeight: 'bold' }}>LinkedIn</span>
                </a>
                
                <a aria-label="GitHub Profile" rel="noreferrer" target="_blank" 
                  href="https://github.com/DrDevEli"
                  className={styles.socialLink}>
                  <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" width="64" height="64"
                    viewBox="0 0 24 24" fill="none" stroke="#dbcd90" strokeWidth="2" strokeLinecap="round"
                    strokeLinejoin="round">
                    <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
                  </svg>
                  <span style={{ marginTop: '0.5rem', fontWeight: 'bold' }}>GitHub</span>
                </a>
              </div>
            </div>

            {/* Contact Form Section */}
            <div className={`${styles.cardStyle} contact-form-section`} style={{ marginTop: '3rem' }}>
              <h2 style={{ color: 'var(--gold)', marginBottom: '1rem', textAlign: 'center' }}>Send Me a Message</h2>
              <p style={{ textAlign: 'center', marginBottom: '2rem' }}>
                Feel free to reach out directly via email, or connect with me on LinkedIn for professional inquiries.
              </p>
              
              <div className={styles.contactInfoGrid}>
                <div className={`${styles.cardStyle} ${styles.infoCard}`}>
                  <h4 style={{ color: 'var(--gold)', marginBottom: '0.5rem' }}>⏰ Response Time</h4>
                  <p style={{ fontSize: '0.9rem', marginBottom: '0' }}>I typically respond within 24-48 hours</p>
                </div>
                
                <div className={`${styles.cardStyle} ${styles.infoCard}`}>
                  <h4 style={{ color: 'var(--gold)', marginBottom: '0.5rem' }}>🤝 Collaboration</h4>
                  <p style={{ fontSize: '0.9rem', marginBottom: '0' }}>Open to discussing web development projects and opportunities</p>
                </div>
                
                <div className={`${styles.cardStyle} ${styles.infoCard}`}>
                  <h4 style={{ color: 'var(--gold)', marginBottom: '0.5rem' }}>🗣️ Languages</h4>
                  <p style={{ fontSize: '0.9rem', marginBottom: '0' }}>English, Portuguese (fluent)</p>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className={`${styles.cardStyle} cta-section`} style={{ marginTop: '3rem', textAlign: 'center' }}>
              <h2 style={{ color: 'var(--gold)', marginBottom: '1rem' }}>Let&apos;s Build Something Great Together</h2>
              <p style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>
                Whether you have a project in mind, want to discuss opportunities, or just want to connect, I&apos;d love to hear from you!
              </p>
              <a href="mailto:e.m.arnald@gmail.com" className={styles.buttonStyle}>
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 