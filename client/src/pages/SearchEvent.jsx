import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import { useParams, Link } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import { SEARCH_CATEGORY } from "../utils/queries";
import { Alert, Row, Col, Card, Button, Modal, Form } from "react-bootstrap";
import AddReaction from "../components/AddReaction";
import Reactions from "../components/Reactions";
import Auth from "../utils/auth";

const SearchMeetings = () => {
  const loggedIn = Auth.loggedIn();
  const [formState, setFormState] = useState("");
  const [show, setShow] = useState(false);
  const [validated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const category = useParams();
  const { loading, data } = useQuery(SEARCH_CATEGORY, {
    variables: { category },
  });
  const meetings = data?.searchMeetings || {};

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormState({ category, [name]: value });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(formState.category);
    // try {
    //   await ({
    //     variables: {  },
    //   });
    // } catch (error) {
    //   console.log(error);
    // }
  };
  return (
    <div>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Search for event</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form noValidate validated={validated}>
            <Alert
              dismissible
              onclose={() => setShowAlert(false)}
              show={showAlert}
            >
              Something went wrong!
            </Alert>

            <Form.Group>
              <Form.Label htmlFor="category">
                Select a category to search for!
              </Form.Label>
              <Form.Control
                as="select"
                name="category"
                onChange={handleInputChange}
                value={formState.category}
              >
                <option>...</option>
                <option value="Community">Community</option>
                <option value="Concert">Concerts</option>
                <option value="Conference">Conferences</option>
                <option value="Expo">Expos</option>
                <option value="Festival">Festivals</option>
                <option value="Food">Food</option>
                <option value="Other">Other</option>
                <option value="Performing Arts">Performing Arts</option>
                <option value="Private">Private</option>
                <option value="Protest">Protests</option>
                <option value="Sport">Sports</option>
                <option value="Water">Water</option>
              </Form.Control>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            type="submit"
            onSubmit={handleFormSubmit}
            onClick={() => setShow(false)}
          >
            Search
          </Button>
        </Modal.Footer>
      </Modal>
      {loggedIn && (
        <>
          <h2>
            What kind of event are you looking for?{" "}
            <Link onClick={() => setShow(true)}>
              <FaIcons.FaSearch />
            </Link>
          </h2>
          {/* <Row xs={1} md={2} lg={3}>
        {meetings &&
          meetings.map((meeting) => (
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
        </Row> */}
        </>
      )}
    </div>
  );
};

export default SearchMeetings;
