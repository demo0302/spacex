import React, { useState, useEffect } from 'react';
import './UserDashboard.css'; // Import the CSS file

const UserDashboard = () => {
  const [accommodations, setAccommodations] = useState([]);
  const [travelTips, setTravelTips] = useState([]);
  const [launchCountdown, setLaunchCountdown] = useState('');
  
  // Sample user data for demonstration
  const userProfile = {
    name: "John Doe",
    email: "john.doe@example.com",
    membership: "Gold Member",
  };

  useEffect(() => {
    // Fetch accommodation recommendations based on user preferences
    const fetchAccommodations = async () => {
      // Sample data for demonstration
      const sampleAccommodations = [
        {
          id: 1,
          name: "Lunar Hotel",
          description: "Experience luxury on the Moon with stunning views of Earth.",
        },
        {
          id: 2,
          name: "Orbital Station Stay",
          description: "Stay in a comfortable orbital station with breathtaking views of space.",
        },
        {
          id: 3,
          name: "Mars Colony Hotel",
          description: "Enjoy a unique stay on Mars with all the comforts of home.",
        },
      ];
      setAccommodations(sampleAccommodations);
    };

    // Fetch AI-based travel tips
    const fetchTravelTips = async () => {
      // Sample data for demonstration
      const sampleTravelTips = [
        "Pack light and bring only essentials.",
        "Stay hydrated during your journey.",
        "Familiarize yourself with space travel protocols.",
        "Keep your camera ready for stunning views!",
      ];
      setTravelTips(sampleTravelTips);
    };
    // Set a countdown timer for launch
    const launchDate = new Date('2025-03-21T10:00:00Z'); // Example launch date
    const interval = setInterval(() => {
      const now = new Date();
      const timeRemaining = launchDate - now;
      if (timeRemaining <= 0) {
        clearInterval(interval);
        setLaunchCountdown('Launch Time!');
      } else {
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
        setLaunchCountdown(`${hours}h ${minutes}m ${seconds}s`);
      }
    }, 1000);

    fetchAccommodations();
    fetchTravelTips();

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="user-dashboard">
      <h1>User Dashboard</h1>

      {/* Profile Section */}
      <section className="profile-section">
        <h2>User Profile</h2>
        <p><strong>Name:</strong> {userProfile.name}</p>
        <p><strong>Email:</strong> {userProfile.email}</p>
        <p><strong>Membership:</strong> {userProfile.membership}</p>
      </section>

      {/* Accommodation Recommendations Section */}
      <section>
        <h2>Accommodation Recommendations</h2>
        <ul>
          {accommodations.map((accommodation) => (
            <li key={accommodation.id}>
              <h3>{accommodation.name}</h3>
              <p>{accommodation.description}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Travel Tips Section */}
      <section>
        <h2>Ai recommended Travel Tips</h2>
        <ul>
          {travelTips.map((tip, index) => (
            <li key={index}>{tip}</li>
          ))}
        </ul>
      </section>

      {/* Launch Countdown Section */}
      <section>
        <h2>Launch Countdown</h2>
        <p>{launchCountdown}</p>
      </section>
    </div>
  );
};

export default UserDashboard;