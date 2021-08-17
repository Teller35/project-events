import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import { SEARCH_CATEGORY } from "../utils/queries";
import { Alert, Row, Col, Card, Button, Modal, Form } from "react-bootstrap";
import Auth from "../utils/auth";

const SearchMeetings = () => {
  const loggedIn = Auth.loggedIn();
  const [category, setCategory] = useState("");
  //   const [meetings, setMeetings] = useState({});
  const [show, setShow] = useState(false);
  const [validated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  //   const category = useParams();
  const { data } = useQuery(SEARCH_CATEGORY, {
    variables: { category },
  });

  const meetings = data?.searchCategory || [];

  const handleFormSubmit = (event) => {
    event.preventDefault();

    // try {
    //   setCategory("");
    // } catch (error) {
    //   console.log(error);
    // }
  };
  return (
    <div className="m-2 border border-5 rounded">
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
          <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
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
                onChange={(e) => setCategory(e.target.value)}
                value={category}
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
            <Button type="submit" onClick={() => setShow(false)}>
              Close
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
      {loggedIn && (
        <>
          <h2>
            What kind of event are you looking for?{" "}
            <FaIcons.FaSearch
              onClick={() => setShow(true)}
              className="cursor"
            />
          </h2>
          <Row xs={1} md={2} lg={3}>
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
                        <text className="fw-bold">
                          {" "}
                          {meeting.meetingType}
                        </text>{" "}
                        event it will held at {meeting.date}.
                      </Card.Text>
                      <Link to={`/meeting/${meeting._id}`}>
                        <button className="MySecondButton">Check it out here</button>
                      </Link>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
          </Row>
        </>
      )}
    </div>
  );
};

export default SearchMeetings;
