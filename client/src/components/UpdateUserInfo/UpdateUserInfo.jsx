import React, { useState } from "react";
import { Form, Alert, Modal } from "react-bootstrap";
import { useMutation } from "@apollo/react-hooks";
import { UPDATE_USER } from "../../utils/mutations";


const UpdateUserInfo = ({ handleModalClose, user }) => {
  const [formState, setFormState] = useState({
    username: user.username,
    firstName: user.firstName,
    lastName: user.lastName,
    age: user.age,
  });

  const [validated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [updateUser] = useMutation(UPDATE_USER);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    try {
       await updateUser({
        variables: { ...formState },
      });
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <>
    
      <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
        <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert}>
          Something went wrong!
        </Alert>

        <Form.Group>
          <Form.Label html="username">Username:</Form.Label>
          <Form.Control
            type="text"
            name="username"
            onChange={handleInputChange}
            value={formState.username}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label html="firstName">First Name:</Form.Label>
          <Form.Control
            type="text"
            name="firstName"
            onChange={handleInputChange}
            value={formState.firstName}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label html="lastName">Last Name:</Form.Label>
          <Form.Control
            type="text"
            name="lastName"
            onChange={handleInputChange}
            value={formState.lastName}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label html="age">Age:</Form.Label>
          <Form.Control
            type="text"
            name="age"
            onChange={handleInputChange}
            value={formState.age}
          />
        </Form.Group>
        <Modal.Footer>
          <button type="submit" className="MySecondButton" onClick={handleModalClose}>Update</button>
        </Modal.Footer>
      </Form>
    </>
  );
};

export default UpdateUserInfo;
