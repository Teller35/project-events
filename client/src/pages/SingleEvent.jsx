import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import { SINGLE_MEETING } from "../utils/queries";
import { Row, Col, Card, Button, Modal, CloseButton } from "react-bootstrap";
import AddReaction from "../components/AddReaction";
import Reactions from "../components/Reactions";
import Auth from "../utils/auth";

const SingleMeeting = (props) => {
  const [showForm, setShowForm] = useState(false);
  const loggedIn = Auth.loggedIn();

  const { id: meetingId } = useParams();
  const { loading, data } = useQuery(SINGLE_MEETING, {
    variables: { id: meetingId },
  });
  const meeting = data?.singleMeeting || {};

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {loggedIn && (
        <Col className="p-2">
          <Card style={{ width: "auto" }} className="Border2 m-auto">
            <Card.Body className="Border2">
              <Link to="/home">
                <span className="MyRed">&larr; Back to Events</span>
              </Link>
              <Card.Title className="text-center fs-1">
                {meeting.meetingType}
              </Card.Title>
              <Card.Subtitle className="text-center fs-4">
                Brought to you by: {meeting.username}
              </Card.Subtitle>
              <Card.Text className="text-center fs-5">
                Come join me at{" "}
                <span className="fw-bold">
                  {meeting.place} in {meeting.city}
                </span>{" "}
                for my <span className="fw-bold">{meeting.meetingType}</span>{" "}
                event it will held at {meeting.date}.
              </Card.Text>
              <Card.Text className="text-center fs-4">Comments:</Card.Text>
              <Card.Text className="text-center fs-6">
                <Reactions reactions={meeting.reactions} />
              </Card.Text>
              <Button onClick={() => setShowForm(true)}>
                Leave a comment here
              </Button>
              <Modal
                show={showForm}
                onHide={() => setShowForm(false)}
                backdrop="static"
                keyboard={false}
              >
                <Modal.Header closeButton>
                  <Modal.Title>R.S.V.P. by leaving a comment...</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <AddReaction
                    meetingId={meetingId}
                    handleModalClose={() => setShowForm(false)}
                  />
                </Modal.Body>
              </Modal>
            </Card.Body>
          </Card>
        </Col>
      )}
    </div>
  );
};

export default SingleMeeting;
