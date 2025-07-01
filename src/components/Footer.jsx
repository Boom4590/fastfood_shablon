import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <style jsx>{`
        /* Desktop Styles (1280px+) */
        .footer {
          background-color: #2c2c2c;
          color: #ffffff;
          padding: 32px 24px;
          text-align: center;
          box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.15);
          max-width: 1280px;
          margin: 0 auto;
          font-family: 'Arial', sans-serif;
        }

        .social-icons {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 24px;
          margin-bottom: 16px;
        }

        .social-icons a {
          color: #ffffff;
          font-size: 16px;
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 8px;
          transition: color 0.3s ease, transform 0.2s ease;
        }

        .social-icons a:hover {
          color: #1e90ff;
          transform: translateY(-2px);
        }

        .social-icons i {
          font-size: 20px;
        }

        .footer p {
          font-size: 14px;
          color: #b0b0b0;
          margin-top: 16px;
        }

        /* Tablet Styles (768px-1279px) */
        @media (min-width: 768px) and (max-width: 1279px) {
          .footer {
            padding: 28px 20px;
            max-width: 100%;
          }

          .social-icons {
            gap: 20px;
          }

          .social-icons a {
            font-size: 15px;
          }

          .social-icons i {
            font-size: 18px;
          }
        }

        /* Mobile Styles (below 768px) */
        @media (max-width: 767px) {
          .footer {
            background: linear-gradient(135deg, #2c2c2c, #1a1a1a);
            padding: 24px 16px;
            box-shadow: 0 -4px 12px rgba(0, 0, 0, 0.2);
            max-width: 95%;
            margin: 0 auto;
          }

          .social-icons {
            flex-direction: column;
            gap: 16px;
          }

          .social-icons a {
            font-size: 14px;
          }

          .social-icons i {
            font-size: 18px;
          }

          .footer p {
            font-size: 13px;
          }
        }
      `}</style>
      <div className="social-icons">
        <a href="https://www.instagram.com/oasis_kg/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i> Instagram
        </a>
        <a href="https://wa.me/996770977027" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-whatsapp"></i> Свяжитесь с нами
        </a>
        <Link to="/about">
          <i className="fas fa-info-circle"></i> О нас
        </Link>
      </div>
      <p>&copy; 2025 Oasis KG. Все права защищены.</p>
    </footer>
  );
}

export default Footer;