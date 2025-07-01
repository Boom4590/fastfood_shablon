import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
function toMenu(){
    document.getElementById("menu")?.scrollIntoView({
                  behavior: "smooth",
                })
                window.location.href = "/"
}
  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") toggleMenu();
  };

  return (
    <>
      <style jsx>{`
        .header {

         
          -webkit-backdrop-filter: blur(10px);
          
          position: fixed;
          width: 100%;
          top: 0;
          z-index: 1000;
          padding: 12px 0;
        }

        .header-container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .logo img {
          height:66px;
          object-fit: contain;
        }

        .right-section {
          display: flex;
          justify-content: center;
          gap: 16px;
          align-items: center;
        }
        .right-section a {
          margin-left: 0;
          text-decoration: none;
        }
        .nav-button {
          background-color: #228b22; /* forest green */
          color: #fff;
          border: none;
          padding: 10px 18px;
          border-radius: 6px;
          cursor: pointer;
          font-size: 16px;
          font-weight: 600;
          transition: background-color 0.3s ease;
          box-shadow: 0 2px 6px rgba(34, 139, 34, 0.5);
        }

        .nav-button:hover {
          background-color: #196619; /* чуть темнее */
          box-shadow: 0 4px 12px rgba(25, 102, 25, 0.7);
        }

        .instagram-logo {
          display: flex;
          align-items: center;
          justify-content: center;
          color:rgb(255, 255, 255);
          font-size: 36px;
          margin-left:60px;
          transition: transform 0.2s ease, color 0.3s ease;
          cursor: pointer;
        }

        .instagram-logo:hover {
          transform: scale(1.2);
          color:rgb(220, 55, 0);
        }

        @media (max-width: 1279px) {
          .desktop-nav,
          .nav-button {
            display: none;
          }

          .burger-btn {
            font-size: 32px;
            cursor: pointer;
            color: #fff;
            transition: color 0.3s;
          }

          .burger-btn:hover {
            color: #228b22;
          }

          .burger-menu {
            position: fixed;
            top: 0;
            left: -100%;
            width: 80%;
            max-width: 300px;
            height: 100%;
            background-color: #f0fff0; /* светло-зеленоватый фон */
            box-shadow: 2px 0 10px rgba(0, 0, 0, 0.2);
            transition: left 0.3s ease;
            z-index: 2000;
            padding: 20px;
          }

          .burger-menu.active {
            left: 0;
          }

          .burger-menu .close-btn {
            font-size: 28px;
            cursor: pointer;
            text-align: right;
            color: #333;
            transition: color 0.3s;
          }

          .burger-menu .close-btn:hover {
            color: #228b22;
          }

          .burger-menu ul {
            list-style: none;
            margin-top: 30px;
          }

          .burger-menu ul li {
            margin: 20px 0;
          }

          .burger-menu ul li a {
            text-decoration: none;
            color: #333;
            font-size: 18px;
            font-weight: 500;
            transition: color 0.3s;
          }

          .burger-menu ul li a:hover {
            color: #228b22;
          }
        }
      `}</style>

      <header className="header">
        <div className="header-container">
          <div
            className="burger-btn"
            onClick={toggleMenu}
            onKeyDown={handleKeyDown}
            tabIndex="0"
            role="button"
            aria-label="Toggle menu"
          >
            ☰
          </div>

          <div className="logo">
            <Link to="/">
              <img src="/images/logo.png" alt="Fast Food Logo" />
            </Link>
          </div>

          <div className="right-section">
            <button
              className="nav-button"
              onClick={() => (window.location.href = "/locations")}
            >
              Точки в Бишкек (12)
            </button>
            <button
              className="nav-button"
              onClick={toMenu}
            >
              Меню
            </button>
            <a
              href="https://www.instagram.com/oasis_kg/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="instagram-logo"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </header>

      <div className={`burger-menu ${isMenuOpen ? "active" : ""}`} id="burgerito">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h2>Бишкек</h2>
          <div
            className="close-btn"
            onClick={toggleMenu}
            onKeyDown={handleKeyDown}
            tabIndex="0"
            role="button"
            aria-label="Close menu"
          >
            ✕
          </div>
        </div>
        <ul>
          <li>
            <Link to="/locations" onClick={toggleMenu}>
              Заведения фастфуд
            </Link>
          </li>
          <li>
            <Link
              to="/"
              onClick={() => {
                toggleMenu();
                document.getElementById("menu")?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              Меню
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={toggleMenu}>
              О нас
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Header;
