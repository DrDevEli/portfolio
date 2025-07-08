import SocialLinks from './SocialLinks';

export default function Footer() {
  return (
    <footer className="footer">
      <SocialLinks />
      <p>© {new Date().getFullYear()} My Portfolio</p>
    </footer>
  );
}
