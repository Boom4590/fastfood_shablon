
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
