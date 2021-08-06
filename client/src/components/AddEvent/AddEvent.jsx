import React, { useEffect, useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { useMutation } from "@apollo/client";
import { ADD_MEETING } from "../../utils/mutations";
import { saveMeeting, getSavedMeeting } from "../../utils/localStorage";
import Auth from "../../utils/auth";

const AddEventForm = () => {

    const [meetingFormData, setMeetingFormData] = useState({
        meetingType: "",
        place: "",
        eventTime: "",
    })
    const [savedEvents, setSavedEvent] = useState(getSavedMeeting());
    const [validated] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const [addMeeting] = useMutation(ADD_MEETING);

    useEffect(() => {
        return () => saveMeeting(savedEvents);
    })

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setMeetingFormData({ ...meetingFormData, [name]: value });
    }

    const handleFormSubmit = async (event) => {
        const { data } = meetingFormData;

        const token = Auth.loggedIn() ? Auth.getToken() : null;

        if(!token) {
            return false;
        }

        try {
            await addMeeting({
                variables: { ...data },
            })
            setSavedEvent([...savedEvents, data])
        } catch (error) {
            console.log(error)
        }
    }
        
    return (
        <>
        <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
            <Alert
            dismissible
            onclose={() => setShowAlert(false)}
            show={showAlert}
            >
                Something went wrong!
            </Alert>

            <Form.Group>
                <Form.Label htmlFor="meetingType">Event Type: </Form.Label>
                <Form.Control
                type="text"
                placeholder="Event Type"
                name="meetingType"
                onChange={handleInputChange}
                value={meetingFormData.meetingType}
                required
                />
            </Form.Group>
            <Form.Group>
                <Form.Label htmlFor="place">Location: </Form.Label>
                <Form.Control
                type="text"
                placeholder="Location"
                name="place"
                onChange={handleInputChange}
                value={meetingFormData.place}
                required
                />
            </Form.Group>
            <Form.Group>
                <Form.Label htmlFor="meetingTime">Time: </Form.Label>
                <Form.Control
                type="text"
                placeholder="Event Time"
                name="meetingTime"
                onChange={handleInputChange}
                value={meetingFormData.meetingTime}
                required
                />
                <Form.Control.Feedback type="invalid">
                    All fields are required!
                </Form.Control.Feedback>
            </Form.Group>
            <Button
            disabled={!(meetingFormData.meetingType && meetingFormData.place && meetingFormData.meetingTime)}
            type="submit"
            >
                Schedule
            </Button>
        </Form>
        </>
    )
}

export default AddEventForm;