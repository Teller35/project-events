import React, { useState } from "react";
import { Form, Button, Alert, Modal } from "react-bootstrap";
import { useMutation } from "@apollo/react-hooks";
import { ADD_MEETING } from "../../utils/mutations";
import DateTimePicker from "react-datetime-picker";
// import { saveMeeting, getSavedMeeting } from "../../utils/localStorage";

const AddEventForm = ({ handleModalClose }) => {
  const [formState, setFormState] = useState({
    meetingType: "",
    place: "",
    city: "",
    state: "",
    category: "",
  });
  // const [savedMeeting, setSavedMeeting] = useState(getSavedMeeting);
  const [validated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [addMeeting] = useMutation(ADD_MEETING);
  const [date, onChange] = useState(new Date());

  // useEffect(() => {
  //   return () => saveMeeting(savedMeeting);
  // });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    // setDate(date)
    setFormState({ ...formState, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    // event.preventDefault();
    // console.log(formState, date)
    try {
      await addMeeting({
        variables: { ...formState, date },
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
        <Alert dismissible onclose={() => setShowAlert(false)} show={showAlert}>
          Something went wrong!
        </Alert>

        <Form.Group>
          <Form.Label htmlFor="category">Category:</Form.Label>
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
        <Form.Group>
          <Form.Label htmlFor="meetingType">Event Type:</Form.Label>
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
          <Form.Label htmlFor="place">Location:</Form.Label>
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
          <Form.Label htmlFor="city">City:</Form.Label>
          <Form.Control
            type="text"
            placeholder="What city is this in?"
            name="city"
            onChange={handleInputChange}
            value={formState.city}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="state">State:</Form.Label>
          <Form.Control
            type="text"
            placeholder="What state is this in?"
            name="state"
            onChange={handleInputChange}
            value={formState.state}
            required
          />
        </Form.Group>
        <Form.Label htmlFor="place">Date/Time:</Form.Label>
        <Form.Group>
          <DateTimePicker onChange={onChange} value={date} />
        </Form.Group>
        <Modal.Footer>
          <Button
            disabled={
              !(
                formState.meetingType &&
                formState.place &&
                formState.city &&
                formState.state &&
                date &&
                formState.category
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
