import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className="footer">
      <style jsx>{`
        /* Desktop Styles (1280px+) */
        .footer {
          background-color: #333;
          color: #fff;
          padding: 24px;
          text-align: center;
          box-shadow: 0 -2px 6px rgba(0, 0, 0, 0.1);
          max-width: 1280px;
          margin: 0 auto;
        }

        .social-icons {
          margin-bottom: 16px;
        }

        .social-icons a {
          color: #fff;
          margin: 0 12px;
          font-size: 22px;
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .social-icons a:hover {
          color: #e31837;
        }

        .footer p {
          font-size: 14px;
          color: #ccc;
        }

        /* Tablet Styles (768px-1279px) */
        @media (min-width: 768px) and (max-width: 1279px) {
          .footer {
            padding: 25px;
            max-width: 1280px;
          }

          .social-icons a {
            font-size: 28px;
          }
        }

        /* Mobile Styles (Original, below 768px) */
        @media (max-width: 767px) {
          .footer {
            background: linear-gradient(135deg, #333, #1a1a1a);
            color: #fff;
            padding: 20px;
            text-align: center;
            box-shadow: 0 -4px 12px rgba(0, 0, 0, 0.2);
            max-width: 90%;
            margin: 0 auto;
          }

          .social-icons a {
            color: #fff;
            margin: 0 15px;
            font-size: 24px;
            text-decoration: none;
            transition: color 0.3s, transform 0.2s;
          }

          .social-icons a:hover {
            color: #d32f2f;
            transform: scale(1.1);
          }

          .footer p {
            font-size: 16px;
            color: #ccc;
          }
        }
      `}</style>
      <div className="social-icons">
        <a href="https://instagram.com">Instagram</a>
       <ul>
         <li>
            <Link to="/about">About</Link>
          </li>
          <li><a href="https://wa.me/1234567890" >Contact Us</a></li>
      
       </ul>
       </div>
    </footer>
  );
}

export default Footer;