import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      toggleMenu();
    }
  };

  return (
    <>
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
              <li><Link to="/about">About</Link></li>
              <li><a href="https://wa.me/1234567890">Contact Us</a></li>
            </ul>
          </nav>
          <button className="lang-btn" aria-label="Switch language">RU/KG</button>
        </div>
      </header>
      <div className={`burger-menu ${isMenuOpen ? "active" : ""}`}>
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
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
          <li className="about" style={{padding:0, textAlign:'left'}}><Link to="/about" onClick={toggleMenu}>About</Link></li>
          <li className="contact"><a href="https://wa.me/1234567890" onClick={toggleMenu}>Contact Us</a></li>
        </ul>
      </div>
    </>
  );
}

export default Header;