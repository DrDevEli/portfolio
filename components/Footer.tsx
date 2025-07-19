import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div>© {new Date().getFullYear()} Eliano Miguel</div>
      {/* Add SocialLinks here if needed */}
    </footer>
  );
};

export default Footer;
