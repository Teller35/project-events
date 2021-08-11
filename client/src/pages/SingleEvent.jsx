import React, {useState} from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import { SINGLE_MEETING } from "../utils/queries";
import { Row, Col, Card, Button, Modal} from "react-bootstrap"
import Events from "../components/Events";
import ReactionForm from "../components/AddReaction/AddReaction";
import Auth from "../utils/auth";

const SingleMeeting = props => {
  const [showForm, setShowForm] = useState(false);

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
        <Col className="p-2">
          <Card
            style={{ width: "20rem" }}
            className="Border m-auto"
            meetingId={meeting._id}
          >
            <Card.Body className="Border">
              <Card.Title className="text-center">
                {meeting.meetingType}
              </Card.Title>
              <Card.Subtitle className="text-center">
                Comments: {meeting.reactionsCount}
              </Card.Subtitle>
              <Card.Text className="text-center">
                Come join me at {meeting.place} for my {meeting.meetingType}{" "}
                event it will held at {meeting.meetingTime}.
              </Card.Text>
                <Button>Check it out here</Button>
            </Card.Body>
          </Card>
        </Col>
    </div>
  );
};

export default SingleMeeting;

{/* <div>
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
      <AddReaction handleModalClose={() => setShowForm(false)} />
    </Modal.Body>
  </Modal>
</div>; */}
