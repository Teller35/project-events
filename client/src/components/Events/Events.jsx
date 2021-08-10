import React, { useEffect } from "react";
import { Card, Row, Button, Col, CardGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

const Events = ({ meetings, title }) => {
  if (!meetings.length) {
    return <h2>No events yet...</h2>;
  }

  return (
  <div className="m-2 border border-5 rounded">
    <h3>{title}</h3>
    <Row xs={1} md={2} lg={3}>
    {meetings && 
    meetings.map((meeting) => (
      <Col className="p-2">
      <Card style={{ width: "20rem" }} className="border border-5 rounded m-auto" key={meeting._id}>
        <Card.Body>
          <Card.Title className="text-center">{meeting.meetingType}</Card.Title>
          <Card.Subtitle className="text-center">{meeting.reactionCount}</Card.Subtitle>
          <Card.Text className="text-center">
            Come join me at {meeting.place} for my {meeting.meetingType} event it 
            will held at {meeting.meetingTime}.
          </Card.Text>
            <Button>R.S.V.P.</Button>
        </Card.Body>
      </Card>
      </Col>
      ))}
      </Row>
  </div>
  )
};

export default Events;
