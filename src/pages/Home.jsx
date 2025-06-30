import { useState, useRef } from "react";
import menuData from "../data/menu.json";

function Home() {
  const [activeCategory, setActiveCategory] = useState("all");
  const categoryRefs = useRef({});
  const { categories, items } = menuData;

  const handleCategoryClick = (cat) => {
    setActiveCategory(cat);
    const element = categoryRefs.current[cat];
    const container = element?.parentElement;
    if (element && container) {
      if (cat === "all") {
        container.scrollTo({
          left: 0,
          behavior: "smooth",
        });
      } else {
        const elementLeft = element.offsetLeft;
        const elementWidth = element.offsetWidth;
        const containerWidth = container.offsetWidth;
        const containerPaddingLeft = parseFloat(getComputedStyle(container).paddingLeft) || 0;
        const scrollTo = elementLeft - containerWidth / 2 + elementWidth / 2 - containerPaddingLeft;
        const maxScrollLeft = container.scrollWidth - containerWidth;
        const finalScroll = Math.max(0, Math.min(scrollTo, maxScrollLeft));

        container.scrollTo({
          left: finalScroll,
          behavior: "smooth",
        });
      }
    }
  };

  const handleKeyDown = (e, cat) => {
    if (e.key === "Enter" || e.key === " ") {
      handleCategoryClick(cat);
    }
  };

  return (
    <div className="main-content">
      <style jsx>{`
        /* Base Styles */
        .main-content {
          flex: 1;
          padding-bottom: 120px;
          font-family: 'Roboto', 'Segoe UI', Arial, sans-serif;
          background-color: #f4f9f4;
        }

        .hero {
          position: relative;
          height: 80vh;
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
          padding: 0;
          overflow: hidden;
        }

        .hero-image {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: 1;
          filter: brightness(0.7);
        }

        .hero-content {
          z-index: 2;
          max-width: 1280px;
          padding: 0 20px;
          color: #fff;
        }

        #animate-button {
          position: relative;
          cursor: pointer;
          padding: 15px 40px;
          border-radius: 8px;
          border: none;
          background: #27ae60;
          color: white;
          font-size: 18px;
          font-weight: 600;
          overflow: hidden;
          transition: background-color 0.3s ease;
          user-select: none;
          z-index: 0;
        }

        #animate-button:hover {
          background-color: #219150;
        }

        #animate-button::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(-65deg, transparent 40%, rgba(255,255,255,0.47) 50%, transparent 70%);
          background-size: 200% 100%;
          background-repeat: no-repeat;
          pointer-events: none;
          animation: shineAnim 3s ease infinite;
          border-radius: inherit;
          z-index: 1;
        }

        @keyframes shineAnim {
          0% {
            background-position: 130%;
            opacity: 1;
          }
          25% {
            background-position: -166%;
            opacity: 0;
          }
          100% {
            background-position: -166%;
            opacity: 0;
          }
        }

        .hero-content h1 {
          font-size: 48px;
          font-weight: 700;
          margin-bottom: 16px;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
          animation: fadeIn 1s ease-in;
        }

        .hero-content p {
          font-size: 20px;
          margin-bottom: 20px;
          line-height: 1.5;
        }

        .hero-content button {
          background-color: #28a745;
          color: #fff;
          border: none;
          padding: 15px 35px;
          border-radius: 6px;
          cursor: pointer;
          font-size: 20px;
          font-weight: 600;
          transition: background-color 0.2s ease;
        }

        .hero-content button:hover {
          background-color: #218838;
        }

        .promo {
          padding: 40px 20px;
          max-width: 1280px;
          margin: 0 auto;
          text-align: center;
          background-color: #fff;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
        }

        .promo h2 {
          font-size: 36px;
          font-weight: 700;
          margin-bottom: 12px;
          color: #28a745;
          animation: fadeIn 1s ease-in;
        }

        .promo p {
          font-size: 16px;
          color: #333;
          margin-bottom: 16px;
        }

        .promo button {
          background-color: rgb(210, 231, 215);
          color: #fff;
          border: none;
          padding: 15px 35px;
          border-radius: 6px;
          cursor: pointer;
          font-size: 20px;
          font-weight: 600;
          transition: background-color 0.2s ease;
        }

        .promo button:hover {
          background-color: #218838;
        }

        .menu {
          max-width: 1280px;
          margin: 0 auto;
          padding: 40px 20px;
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .categories {
          width: 100%;
          padding-left: 10px;
          padding-right: 20px;
          display: flex;
          justify-content: center;
          overflow-x: auto;
          gap: 10px;
          padding: 10px 0;
          white-space: nowrap;
          scroll-snap-type: x mandatory;
          scrollbar-width: thin;
          scrollbar-color: rgb(255, 255, 255) #f5f5f5;
        }

        .category:first-child {
          margin-left: 0;
        }

        .categories::-webkit-scrollbar {
          display: none;
        }

        .category {
          width: 150px;
          text-align: center;
          padding: 8px 16px;
          border-radius: 10px;
          font-size: 14px;
          background-color: #e6f4ea;
          color: #333;
          white-space: nowrap;
          cursor: pointer;
          transition: background-color 0.2s ease, color 0.2s ease;
        }

        .category.active,
        .category:hover {
          background-color: #28a745;
          color: #fff;
        }

        .menu-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          margin: 10px 60px;
          gap: 44px;
        }

        .menu-item {
          background: #fff;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          display: flex;
          flex-direction: column;
          align-items: stretch;
          animation: fadeInUp 0.3s ease-out forwards; /* Animation applied */
          opacity: 0; /* Start invisible for animation */
        }

        .menu-item:hover {
          transform: translateY(-4px);
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
        }

        .menu-image {
          width: 100%;
          height: auto;
          object-fit: contain;
          display: block;
          background-color: transparent;
        }

        .menu-item-content {
          padding: 16px;
          display: flex;
          flex-direction: column;
          gap: 8px;
          flex-grow: 1;
        }

        .menu-item h3 {
          font-size: 18px;
          font-weight: 600;
          color: #333;
          margin: 0;
        }

        .menu-item p {
          font-size: 14px;
          color: #666;
          margin: 0;
        }

        .menu-item .price {
          font-size: 16px;
          font-weight: 700;
          color: #28a745;
        }

        .menu-item .new-badge {
          font-size: 12px;
          color: #28a745;
          font-weight: 600;
        }

        /* Animation for menu items */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .testimonials {
          padding: 40px 20px;
          max-width: 1280px;
          margin: 0 auto;
          text-align: center;
          background: #e6f4ea;
        }

        .testimonials h2 {
          font-size: 36px;
          font-weight: 700;
          margin-bottom: 16px;
          color: #333;
          animation: fadeIn 1s ease-in;
        }

        .testimonial-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }

        .testimonial-card {
          background: #fff;
          border-radius: 8px;
          padding: 16px;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
          transition: transform 0.2s ease;
        }

        .testimonial-card:hover {
          transform: translateY(-4px);
        }

        .testimonial-card p {
          font-size: 14px;
          color: #666;
          margin-bottom: 8px;
          line-height: 1.4;
        }

        .testimonial-card .author {
          font-size: 13px;
          font-weight: 600;
          color: #28a745;
        }

        .cta {
          background: #fff;
          padding: 40px 20px;
          text-align: center;
          max-width: 1280px;
          margin: 0 auto;
        }

        .cta h2 {
          font-size: 36px;
          font-weight: 700;
          margin-bottom: 12px;
          color: #333;
          animation: fadeIn 1s ease-in;
        }

        .cta p {
          font-size: 20px;
          color: #666;
          margin-bottom: 16px;
        }

        .cta button {
          background-color: rgb(211, 222, 214);
          color: #fff;
          border: none;
          padding: 15px 35px;
          border-radius: 6px;
          cursor: pointer;
          font-size: 20px;
          font-weight: 600;
          transition: background-color 0.2s ease;
        }

        .cta button:hover {
          background-color: #218838;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* Mobile Styles */
        @media (max-width: 767px) {
        .header{
        height:74px;
        background-color:green}
          .main-content {
            padding-bottom: 100px;
          }

          .hero {
            height: 80vh;
            background-color: #e6f4ea;
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            padding: 20px 0 0 0;
            position: relative;
          }

          .hero-image {
            height: 100%;
            width: 100%;
            background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), #ccc;
            position: absolute;
            top: 0;
            z-index: 1;
          }

          .hero-content {
            z-index: 2;
            max-width: 90%;
          }

          .hero-content h1 {
            font-size: 36px;
            font-weight: 800;
            margin-bottom: 20px;
            color: #fff;
            text-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);
          }

          .hero-content p {
            font-size: 18px;
            margin-bottom: 25px;
            line-height: 1.5;
            color: #fff;
          }

          .hero-content button {
            background: linear-gradient(135deg, #28a745, #218838);
            color: #fff;
            border: none;
            padding: 12px 30px;
            border-radius: 10px;
            cursor: pointer;
            font-size: 18px;
            font-weight: 600;
            transition: transform 0.3s, box-shadow 0.3s;
          }

          .hero-content button:hover {
            transform: scale(1.05);
            box-shadow: 0 6px 16px rgba(0, 0, 0, 0.3);
          }

          .promo {
            display: none;
          }

          .menu {
            padding: 40px 10px;
            max-width: 90%;
            margin: 0 auto;
            display: flex;
            flex-direction: column;
            gap: 30px;
          }

          .categories {
            width: 100%;
            padding-left: 0;
            padding-right: 0;
            display: flex;
            justify-content: flex-start;
            margin: 0 auto;
            overflow-x: auto;
            gap: 10px;
            padding: 10px 0;
            white-space: nowrap;
            scroll-snap-type: x mandatory;
            scrollbar-width: thin;
            scrollbar-color:rgb(255, 255, 255) #f5f5f5;
          }

          .category:first-child {
            margin-left: 0;
          }

          .categories::-webkit-scrollbar {
            height: 8px;
          }

          .categories::-webkit-scrollbar-thumb {
            background-color: #28a745;
            border-radius: 4px;
          }

          .categories::-webkit-scrollbar-track {
            background-color: #f5f5f5;
          }

          .category {
            background: linear-gradient(135deg, #28a745, #218838);
            color: #fff;
            padding: 10px 20px;
            border-radius: 6px;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100px;
            cursor: pointer;
            flex-shrink: 0;
            font-size: 18px;
            font-weight: 600;
            transition: transform 0.3s, box-shadow 0.3s;
            scroll-snap-align: center;
          }

          .category:hover {
            transform: scale(1.05);
            box-shadow: 0 6px 16px rgba(0, 0, 0, 0.3);
          }

          .category.active {
            background: linear-gradient(135deg, #218838, #1e7e34);
          }

          .category:focus {
            outline: 2px solid #218838;
            outline-offset: 2px;
          }

          .menu-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .menu-item {
            background: linear-gradient(135deg, #fff, #fafafa);
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s, box-shadow 0.3s;
            will-change: transform;
            display: flex;
            flex-direction: column;
            align-items: stretch;
            animation: fadeInUp 0.3s ease-out forwards;
            opacity: 0;
          }

          .menu-item:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
          }

          .menu-image {
            width: 100%;
            height: auto;
            object-fit: contain;
            display: block;
            background-color: transparent;
          }

          .menu-item-content {
            padding: 20px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            flex-grow: 1;
          }

          .menu-item h3 {
            font-size: 22px;
            font-weight: 600;
            margin-bottom: 10px;
            color: #333;
          }

          .testimonials {
            padding: 40px 20px;
            text-align: center;
            background: linear-gradient(135deg, #e6f4ea, #d4edda);
          }

          .testimonials h2 {
            font-size: 32px;
            font-weight: 800;
            margin-bottom: 25px;
            animation: fadeIn 1s ease-in;
          }

          .testimonial-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .testimonial-card {
            background-color: #fff;
            border-radius: 12px;
            padding: 20px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s, box-shadow 0.3s;
          }

          .testimonial-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
          }

          .testimonial-card p {
            font-size: 16px;
            color: #666;
            margin-bottom: 10px;
            line-height: 1.5;
          }

          .testimonial-card .author {
            font-size: 14px;
            font-weight: 600;
            color: #28a745;
          }

          .cta {
            background: linear-gradient(135deg, #e6f4ea, #d4edda);
            padding: 40px 20px;
            text-align: center;
          }

          .cta h2 {
            font-size: 32px;
            font-weight: 800;
            margin-bottom: 15px;
            animation: fadeIn 1s ease-in;
          }

          .cta p {
            font-size: 18px;
            color: #666;
            margin-bottom: 20px;
          }

          .cta button {
            background: linear-gradient(135deg, #28a745, #218838);
            color: #fff;
            border: none;
            padding: 12px 30px;
            border-radius: 10px;
            cursor: pointer;
            font-size: 18px;
            font-weight: 600;
            transition: transform 0.3s, box-shadow 0.3s;
          }

          .cta button:hover {
            transform: scale(1.05);
            box-shadow: 0 6px 16px rgba(0, 0, 0, 0.3);
          }
        }
      `}</style>
      <section className="hero">
        <img
          src="https://hayat.rest/image/catalog/blog/shutterstock_644368891(1).jpg"
          alt="Fast Food Hero"
          className="hero-image"
          loading="lazy"
        />
        <div className="hero-content">
          <h1 className="animate-fadeIn">Welcome to Fast Food</h1>
          <p>Discover delicious meals at our Bishkek locations. Order now on Glovo!</p>
          <button
            id="animate-button"
            onClick={() => window.location.href = "https://glovoapp.com"}
            aria-label="Order on Glovo"
          >
            Order Now
          </button>
        </div>
      </section>
      <section className="promo" style={{ display: 'none' }}>
        <h2 className="animate-fadeIn">Today’s Deal</h2>
        <p>50 bonus points for registering in our app!</p>
        <button
          onClick={() => window.location.href = "https://glovoapp.com"}
          aria-label="Claim Bonus Offer"
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
              onClick={() =>

 handleCategoryClick(cat)}
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
          {items.map((item, index) =>
            (activeCategory === "Популярн." || item.category === activeCategory) && (
              <div
                key={item.id}
                className="menu-item"
                style={{ animationDelay: `${index * 0.1}s` }} /* Staggered delay */
              >
                <img
                  src={item.image || "https://via.placeholder.com/400x300"}
                  alt={item.name}
                  className="menu-image"
                  loading="lazy"
                />
                <div className="menu-item-content">
                  <h3>{item.name}</h3>
                  {item.isNew && <span className="new-badge">Новинка</span>}
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
          <div className="testimonial-card">
            <p>“The new desserts are amazing!”</p>
            <p className="author">— Customer Name</p>
          </div>
        </div>
      </section>
      <section className="cta">
        <h2 className="animate-fadeIn">Ready to Order?</h2>
        <p>Visit Glovo to enjoy our delicious menu today!</p>
        <button
          id="animate-button"
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