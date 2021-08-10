import React, { useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Events = ({ meetings, title }) => {
  if (!meetings.length) {
    return <h2>No events yet...</h2>;
  }

  return <div>
    <h3>{title}</h3>
    {meetings && 
    meetings.map((meeting) => (
      <div key={meeting._id}>
        <p>{meeting.meetingType}</p>
      </div>
    ))}
  </div>;
};

export default Events;
