import { FaFacebook, FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
  const socialLinks = [
    { icon: <FaFacebook />, url: "https://www.facebook.com/share/1DFrGUhdcV/" },
    { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/humam-safi-9860a2360/" },
    { icon: <FaInstagram />, url: "https://www.instagram.com/humam__safi?igsh=MTgzY3lnZWs3czAzOQ==" },
    { icon: <FaGithub />, url: "https://github.com/Humam-Safi" },
  ];

  return (
    <header className="fixed-top bg-gradient-dark bg-opacity-75">
      <div className="container">
        <nav className="navbar py-2">
          <h1 className="navbar-brand text-white fs-4 fw-bold mb-0">
            Humam Safi
          </h1>
          <div className="d-flex gap-3">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white fs-5 social-link"
                style={{
                  transition: 'all 0.3s ease',
                  display: 'inline-block',
                  transform: 'scale(1)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#6366f1';
                  e.currentTarget.style.transform = 'scale(1.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'white';
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;