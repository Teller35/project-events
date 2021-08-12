import React, { useEffect, useState } from "react";
import { Form, Button, Alert, Modal } from "react-bootstrap";
import { useMutation } from "@apollo/react-hooks";
import { ADD_MEETING } from "../../utils/mutations";
// import { MEETINGS, GET_ME } from "../../utils/queries";
import { saveMeeting, getSavedMeeting } from "../../utils/localStorage";
import Auth from "../../utils/auth";

const AddEventForm = ({ handleModalClose }) => {
    const [formState, setFormState] = useState({
        meetingType: "",
        meetingTime: "",
        place: ""
    })
    const [savedMeeting, setSavedMeeting] = useState(getSavedMeeting);
    const [validated] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
  
  const [addMeeting] = useMutation(ADD_MEETING);
  //  const handleModalClose = useState(false)

  useEffect(() => {
    return () => saveMeeting(savedMeeting);
  })

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value })
  }

  const handleFormSubmit = async (event) => {
      try {
        await addMeeting({
          variables: { ...formState },
        })
      } catch (error) {
      console.log(error);
      }
  }

  return (
    <>
      <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
        <Alert dismissible onclose={() => setShowAlert(false)} show={showAlert}>
          Something went wrong!
        </Alert>

        <Form.Group>
          <Form.Label htmlFor="meetingType">Event Type: </Form.Label>
          <Form.Control
            type="text"
            placeholder="What kind of event?"
            name="meetingType"
            onChange={handleInputChange}
            value={formState.meetingType}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="place">Location: </Form.Label>
          <Form.Control
            type="text"
            placeholder="What is the location?"
            name="place"
            onChange={handleInputChange}
            value={formState.place}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="meetingTime">Time: </Form.Label>
          <Form.Control
            type="text"
            placeholder="What is the event time"
            name="meetingTime"
            onChange={handleInputChange}
            value={formState.meetingTime}
            required
          />
        </Form.Group>
        <Modal.Footer>
          <Button
            disabled={
              !(
                formState.meetingType &&
                formState.place &&
                formState.meetingTime
              )
            }
            type="submit"
            onClick={handleModalClose}
          >
            Schedule
          </Button>
        </Modal.Footer>
      </Form>
    </>
  );
};

export default AddEventForm;
