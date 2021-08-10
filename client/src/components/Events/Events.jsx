import React, { useEffect } from "react";
import { Card, Row, Button, Col, CardGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

const Events = ({ meetings, title }) => {
  if (!meetings.length) {
    return <h2>No events yet...</h2>;
  }

  return (
  <div className="border border-5 rounded">
    <h3>{title}</h3>
    <Row xs={1} md={2} lg={3}>
    {meetings && 
    meetings.map((meeting) => (
      <Col className="p-2">
      <Card style={{ width: "20rem" }} className="border border-5 rounded m-auto " key={meeting._id}>
        <Card.Body>
          <Card.Title>{meeting.meetingType}</Card.Title>
          <Card.Subtitle>{meeting.reactionCount}</Card.Subtitle>
          <Card.Text>
            Come join me at {meeting.place} for my event {meeting.meetingType} it 
            will held at {meeting.meetingTime}.
          </Card.Text>
        </Card.Body>
      </Card>
      </Col>
      ))}
      </Row>
  </div>
  )
};

export default Events;
