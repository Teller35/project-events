import React from "react";
import { Card, Row, Button, Col } from "react-bootstrap";
import { Link } from "react-router-dom";


const MyEvents = ({ myMeetings }) => {
  if (!myMeetings.length) {
    return <h2>No events yet...</h2>;
  }
  return (
    <div className="m-2 border border-5 rounded">
      <h3>Your Events</h3>
      <Row xs={1} md={2} lg={3}>
        {myMeetings &&
          myMeetings.map((meeting) => (
            <Col className="p-2">
              <Card
                style={{ width: "20rem" }}
                className="Border m-auto"
                key={meeting._id}
              >
                <Card.Body className="Border">
                  <Card.Title className="text-center">
                    {meeting.meetingType}
                  </Card.Title>
                  <Card.Subtitle className="text-center">
                    Category: {meeting.category}
                  </Card.Subtitle>
                  <Card.Subtitle className="text-center">
                    Location: {meeting.city}, {meeting.state}
                  </Card.Subtitle>
                  <Card.Subtitle className="text-center">
                    Comments: {meeting.reactionsCount}
                  </Card.Subtitle>
                  <Card.Text className="text-center">
                    Come join me at
                    <text className="fw-bold">
                      {" "}
                      {meeting.place} in {meeting.city}
                    </text>{" "}
                    for my
                    <text className="fw-bold"> {meeting.meetingType}</text>{" "}
                    event it will held at {meeting.date}.
                  </Card.Text>
                  <Link to={`/meeting/${meeting._id}`}>
                    <Button>Check it out here</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
      </Row>
    </div>
  );
};

export default MyEvents;