function Locations() {
  const locations = [
    { id: 1, name: "Location 1", address: "Placeholder Street 1, Bishkek", phone: "1234567890", hours: "10:00 - 22:00" },
    { id: 2, name: "Location 2", address: "Placeholder Street 2, Bishkek", phone: "1234567890", hours: "10:00 - 22:00" },
    { id: 3, name: "Location 3", address: "Placeholder Street 3, Bishkek", phone: "1234567890", hours: "10:00 - 22:00" },
    { id: 4, name: "Location 4", address: "Placeholder Street 4, Bishkek", phone: "1234567890", hours: "10:00 - 22:00" },
    { id: 5, name: "Location 5", address: "Placeholder Street 5, Bishkek", phone: "1234567890", hours: "10:00 - 22:00" },
  ];

  return (
    <section className="locations pt-16" id="locations">
      <style jsx>{`
        /* Desktop Styles (1280px+) */
        .locations {
          padding: 40px 24px;
          max-width: 1280px;
          margin: 0 auto;
        }
       
        .locations h2 {
          text-align: center;
          font-size: 32px;
          font-weight: 700;
          margin-bottom: 16px;
          color: #333;
          animation: fadeIn 1s ease-in;
        }

        .location-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .location-card {
          background: #fff;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
          transition: transform 0.2s ease;
        }

        .location-card:hover {
          transform: translateY(-4px);
        }

        .image-placeholder {
          width: 100%;
          height: 220px;
          background-color: #f5f5f5;
          object-fit: cover;
        }

        .location-card-content {
          padding: 16px;
        }

        .location-card h3 {
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 8px;
          color: #333;
        }

        .location-card p {
          font-size: 14px;
          color: #666;
          margin-bottom: 8px;
        }

        .location-card button {
          background-color: #e31837;
          color: #fff;
          border: none;
          padding: 10px;
          border-radius: 6px;
          cursor: pointer;
          width: 100%;
          font-size: 16px;
          font-weight: 600;
          transition: background-color 0.2s ease;
        }

        .location-card button:hover {
          background-color: #c1122f;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* Tablet Styles (768px-1279px) */
        @media (min-width: 768px) and (max-width: 1279px) {
          .locations {
            padding: 40px 20px;
            max-width: 1280px;
            margin: 0 auto;
          }

          .locations h2 {
            font-size: 36px;
          }

          .location-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }

          .location-card h3 {
            font-size: 24px;
          }

          .location-card p {
            font-size: 16px;
          }

          .location-card button {
            font-size: 18px;
          }
        }

        /* Mobile Styles (Original, below 768px) */
        @media (max-width: 767px) {
          .locations {
            padding: 40px 20px;
            max-width: 90%;
            margin: 0 auto;
          }

          .locations h2 {
            text-align: center;
            font-size: 32px;
            font-weight: 800;
            margin-bottom: 25px;
            animation: fadeIn 1s ease-in;
          }

          .location-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .location-card {
            background: linear-gradient(135deg, #fff, #fafafa);
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s, box-shadow 0.3s;
          }

          .location-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
          }

          .image-placeholder {
            height: 250px;
            background-color: #ccc;
          }

          .location-card-content {
            padding: 20px;
          }

          .location-card h3 {
            font-size: 22px;
            font-weight: 600;
            margin-bottom: 10px;
          }

          .location-card p {
            font-size: 15px;
            color: #666;
            margin-bottom: 10px;
          }

          .location-card button {
            background: linear-gradient(135deg, #d32f2f, #b71c1c);
            color: #fff;
            border: none;
            padding: 12px;
            border-radius: 10px;
            cursor: pointer;
            width: 100%;
            font-size: 16px;
            font-weight: 600;
            transition: transform 0.3s, box-shadow 0.3s;
          }

          .location-card button:hover {
            transform: scale(1.05);
            box-shadow: 0 6px 16px rgba(0, 0, 0, 0.3);
          }
        }
      `}</style>
      <h2 className="animate-fadeIn">Our Locations in Bishkek</h2>
      <div className="location-grid">
        {locations.map((loc) => (
          <div key={loc.id} className="location-card">
            <div className="image-placeholder"></div>
            <div className="location-card-content">
              <h3>{loc.name}</h3>
              <p>Address: {loc.address}</p>
              <p>Phone: {loc.phone}</p>
              <p>Hours: {loc.hours}</p>
              <button onClick={() => window.location.href = "https://maps.google.com"}>Open in Map</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Locations;