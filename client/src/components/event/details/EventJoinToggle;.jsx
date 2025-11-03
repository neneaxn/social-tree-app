import React, { useState } from 'react';

// The main application component.
// In a real application, this would fetch event data, but here we use mock data.
const App = () => {
  // Mock event data to set the initial state
  const event = {
    type: "Tech Meetup",
    location: "Downtown Convention Center, Room 402",
    description: "Join us for a discussion on the latest advancements in AI and machine learning. Food and drinks will be provided.",
    // We start with an arbitrary number of initial guests
    initialGuests: 42,
  };

  // 1. State for the total number of guests attending
  const [guestCount, setGuestCount] = useState(event.initialGuests);
  // 2. State for the current user's attendance status
  const [isAttending, setIsAttending] = useState(false);

  /**
   * Toggles the user's attendance status and updates the guest count.
   */
  const handleToggleAttendance = () => {
    // Check the current attendance status
    if (isAttending) {
      // User is currently attending -> Unsubscribe and decrement count
      setGuestCount(prevCount => prevCount - 1);
      setIsAttending(false);
    } else {
      // User is not attending -> RSVP and increment count
      setGuestCount(prevCount => prevCount + 1);
      setIsAttending(true);
    }
  };

  // Dynamic values for the button based on the state
  const buttonText = isAttending ? "Unsubscribe from Event" : "RSVP to Attend";

  // Basic styles to ensure readability, as requested without a styling library.
  const containerStyle = {
    maxWidth: '600px',
    margin: '40px auto',
    padding: '20px',
    borderRadius: '12px',
    border: '1px solid #ccc',
    fontFamily: 'Arial, sans-serif',
    boxShadow: '0 10px 15px rgba(0, 0, 0, 0.05)',
    backgroundColor: '#fff',
  };

  const counterStyle = {
    fontSize: '28px',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '15px',
    paddingTop: '10px',
    borderTop: '1px solid #eee'
  };

  const buttonStyle = {
    padding: '12px 24px',
    fontSize: '16px',
    fontWeight: 'bold',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease, transform 0.1s ease',
    // Change color based on status: Green for RSVP, Red for Unsubscribe
    backgroundColor: isAttending ? '#dc3545' : '#28a745',
    color: 'white',
    border: 'none',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
  };

  return (
    <div style={containerStyle}>
      <h2>Event Details</h2>
      <p style={{ color: '#555' }}>
        <strong>Type:</strong> {event.type}<br/>
        <strong>Location:</strong> {event.location}
      </p>

      <div style={{ marginBottom: '20px' }}>
        <h3>Description</h3>
        <p>{event.description}</p>
      </div>

      <div style={{ textAlign: 'center', marginTop: '30px' }}>
        {/* Guest Counter Display */}
        <div style={counterStyle}>
          {guestCount} Guests Attending
        </div>

        {/* Attendance Toggle Button */}
        <button
          onClick={handleToggleAttendance}
          style={buttonStyle}
          // Simple interactive styles for hover/press states
          onMouseDown={(e) => e.currentTarget.style.transform = 'scale(0.98)'}
          onMouseUp={(e) => e.currentTarget.style.transform = 'scale(1)'}
          onMouseEnter={(e) => e.currentTarget.style.opacity = '0.9'}
          onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default App;
