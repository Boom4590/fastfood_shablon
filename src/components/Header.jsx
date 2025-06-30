
import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      toggleMenu();
    }
  };

  return (
    <>
      <style jsx>{`
        /* Desktop Styles (1280px+) */
        .header {
          background-color: #fff;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
          position: fixed;
          width: 100%;
          top: 0;
          z-index: 1000;
          padding: 16px 0;
        }

        .header-container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .logo {
          font-size: 30px;
          font-weight: 700;
          color: #e31837;
          flex-shrink: 0;
          letter-spacing: 0.5px;
        }

        .desktop-nav {
          display: block;
        }

        .desktop-nav ul {
          display: flex;
          gap: 24px;
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .desktop-nav ul li {
          padding: 8px 12px;
        }

        .desktop-nav ul li a {
          color: #333;
          font-size: 16px;
          font-weight: 600;
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .desktop-nav ul li a:hover {
          color: #e31837;
          text-decoration: underline;
        }

        .lang-btn {
          background-color: #e31837;
          color: #fff;
          border: none;
          padding: 10px 20px;
          border-radius: 6px;
          cursor: pointer;
          font-size: 16px;
          font-weight: 600;
          transition: background-color 0.2s ease;
        }

        .lang-btn:hover {
          background-color: #c1122f;
        }

        /* Tablet/Mobile Styles (Original, below 1280px) */
        @media (max-width: 1279px) {
          .header {
            background-color: #fff;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
            position: fixed;
            width: 100%;
            top: 0;
            z-index: 1000;
            padding: 15px 20px;
          }

          .header-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            max-width: 1280px;
            margin: 0 auto;
          }

          .desktop-nav {
            display: none;
          }

          .logo {
            font-size: 40px;
            font-weight: 800;
            color: #d32f2f;
            letter-spacing: 1.5px;
          }

          .burger-btn {
            font-size: 32px;
            cursor: pointer;
            color: #333;
            transition: color 0.3s;
          }

          .burger-btn:hover {
            color: #d32f2f;
          }

          .lang-btn {
            background: linear-gradient(135deg, #d32f2f, #b71c1c);
            color: #fff;
            border: none;
            padding: 10px 20px;
            border-radius: 10px;
            cursor: pointer;
            font-size: 18px;
            font-weight: 600;
            transition: transform 0.3s, box-shadow 0.3s;
          }

          .lang-btn:hover {
            transform: scale(1.05);
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
          }

          .burger-menu {
            position: fixed;
            top: 0;
            left: -100%;
            width: 80%;
            max-width: 300px;
            height: 100%;
            background-color: #fff;
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
            color: #d32f2f;
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
            color: #d32f2f;
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
            aria-label="Toggle navigation menu"
          >
            ☰
          </div>
          <div className="logo">Fast Food</div>
          <nav className="desktop-nav">
            <ul>
              <li><Link to="/locations">Locations in Bishkek</Link></li>
              <li>
                <Link
                  to="/"
                  onClick={() => document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Our Menu
                </Link>
              </li>
              
            </ul>
          </nav>
         <a
  href="https://instagram.com/yourpage"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Instagram"
  className="instagram-logo"
>
  <i className="fab fa-instagram" style={{ fontSize: 30,color:'red' }}></i>
</a>

        </div>
      </header>
      <div className={`burger-menu ${isMenuOpen ? "active" : ""}`} id="burgerito">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <h2>Bishkek</h2>
          <div
            className="close-btn"
            onClick={toggleMenu}
            onKeyDown={handleKeyDown}
            tabIndex="0"
            role="button"
            aria-label="Close navigation menu"
          >
            ✕
          </div>
        </div>
        <ul>
          <li>
            <Link to="/locations" onClick={toggleMenu}>Locations in Bishkek</Link>
          </li>
          <li>
            <Link
              to="/"
              onClick={() => {
                toggleMenu();
                document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Our Menu
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={toggleMenu}>About</Link>
          </li>
          <li><a href="https://wa.me/1234567890" onClick={toggleMenu}>Contact Us</a></li>
        </ul>
      </div>
    </>
  );
}

export default Header;