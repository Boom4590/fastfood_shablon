function About() {
  return (
    <section className="about pt-16" id="about">
      <style jsx>{`
        /* Desktop Styles (1280px+) */
        .about {
          padding: 40px 24px;
          max-width: 1280px;
          margin: 0 auto;
          text-align: center;
        }

        .about h2 {
          font-size: 32px;
          font-weight: 700;
          margin-bottom: 16px;
          color: #333;
          animation: fadeIn 1s ease-in;
        }

        .about-image {
          height: 300px;
          background-color: #f5f5f5;
          margin: 16px auto;
          max-width: 600px;
          border-radius: 8px;
        }

        .about p {
          font-size: 16px;
          color: #666;
          margin-bottom: 16px;
          line-height: 1.5;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* Tablet Styles (768px-1279px) */
        @media (min-width: 768px) and (max-width: 1279px) {
          .about {
            padding: 40px 20px;
            max-width: 1280px;
            margin: 0 auto;
          }

          .about h2 {
            font-size: 36px;
          }

          .about p {
            font-size: 20px;
          }

          .about-image {
            height: 350px;
          }
        }

        /* Mobile Styles (Original, below 768px) */
        @media (max-width: 767px) {
          .about {
            padding: 40px 20px;
            max-width: 90%;
            margin: 0 auto;
            text-align: center;
          }

          .about h2 {
            font-size: 32px;
            font-weight: 800;
            margin-bottom: 25px;
            animation: fadeIn 1s ease-in;
          }

          .about-image {
            height: 250px;
            background-color: #ccc;
            margin: 25px auto;
            max-width: 600px;
            border-radius: 12px;
          }

          .about p {
            font-size: 18px;
            color: #666;
            margin-bottom: 20px;
            line-height: 1.6;
          }
        }
      `}</style>
      <h2 className="animate-fadeIn">About Us</h2>
      <div className="about-image"></div>
      <p>
        Placeholder text about our fast-food restaurant. We are committed to serving delicious food with quality ingredients. Our story began in Bishkek, and we aim to provide a great dining experience. Contact us at 1234567890 for more information.
      </p>
      <p>
        Our mission is to bring joy through food, offering a variety of options like shawarma, burgers, and drinks. Visit any of our five locations in Bishkek, open daily from 10:00 to 22:00.
      </p>
    </section>
  );
}

export default About;