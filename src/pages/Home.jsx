import { useState, useRef } from "react";
import menuData from "../data/menu.json";

function Home() {
  const [activeCategory, setActiveCategory] = useState("all");
  const categoryRefs = useRef({});
  const { categories, items } = menuData;

  const handleCategoryClick = (cat) => {
    setActiveCategory(cat);
    const element = categoryRefs.current[cat];
    if (element) {
      element.scrollIntoView({ behavior: "smooth", inline: "center" });
    }
  };

  const handleKeyDown = (e, cat) => {
    if (e.key === "Enter" || e.key === " ") {
      handleCategoryClick(cat);
    }
  };

  return (
    <div className="main-content">
      <section className="hero">
        <div className="hero-image"></div>
        <div className="hero-content">
          <h1 className="animate-fadeIn">Welcome to Fast Food</h1>
          <p>Discover delicious meals at our Bishkek locations. Order now on Glovo!</p>
          <button
            onClick={() => window.location.href = "https://glovoapp.com"}
            aria-label="Order on Glovo"
          >
            Order Now
          </button>
        </div>
      </section>
      <section className="promo" style={{display:'none'}}>
        <h2 className="animate-fadeIn">Today’s Deal</h2>
        <p>20% off all Combos this week! Order now on Glovo.</p>
        <button
          onClick={() => window.location.href = "https://glovoapp.com"}
          aria-label="Claim Combo Deal"
        >
          Claim Offer
        </button>
      </section>
      <section id="menu" className="menu">
        <div className="categories">
          {categories.map((cat) => (
            <div
              key={cat}
              ref={(el) => (categoryRefs.current[cat] = el)}
              className={`category ${activeCategory === cat ? "active" : ""}`}
              onClick={() => handleCategoryClick(cat)}
              onKeyDown={(e) => handleKeyDown(e, cat)}
              tabIndex="0"
              role="button"
              aria-label={`Select ${cat} category`}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </div>
          ))}
        </div>
        <div className="menu-grid">
          {items.map((item) =>
            (activeCategory === "all" || item.category === activeCategory) && (
              <div key={item.id} className="menu-item">
                <img
                  src="/images/placeholder.jpg"
                  alt={item.name}
                  className="menu-image"
                  loading="lazy"
                />
                <div className="menu-item-content">
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <p className="price">{item.price} KGS</p>
                </div>
              </div>
            )
          )}
        </div>
      </section>
      <section className="testimonials">
        <h2 className="animate-fadeIn">What Our Customers Say</h2>
        <div className="testimonial-grid">
          <div className="testimonial-card">
            <p>“Best shawarma in Bishkek! Fast delivery via Glovo.”</p>
            <p className="author">— Customer Name</p>
          </div>
          <div className="testimonial-card">
            <p>“Love the burgers, great quality and taste!”</p>
            <p className="author">— Customer Name</p>
          </div>
        </div>
      </section>
      <section className="cta">
        <h2 className="animate-fadeIn">Ready to Order?</h2>
        <p>Visit Glovo to enjoy our delicious menu today!</p>
        <button
          onClick={() => window.location.href = "https://glovoapp.com"}
          aria-label="Order on Glovo Now"
        >
          Order on Glovo
        </button>
      </section>
    </div>
  );
}

export default Home;