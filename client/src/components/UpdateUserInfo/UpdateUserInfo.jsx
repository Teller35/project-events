import React, { useState } from "react";
import { Form, Alert, Modal } from "react-bootstrap";
import { useMutation } from "@apollo/react-hooks";
import { UPDATE_USER } from "../../utils/mutations";


const UpdateUserInfo = ({ handleModalClose, user }) => {
  const [formState, setFormState] = useState([]);

  const [validated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [updateUser] = useMutation(UPDATE_USER);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    // event.preventDefault();
    // console.log(formState)
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
            placeholder={user.username}
            onChange={handleInputChange}
            value={formState.username}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label html="firstName">First Name:</Form.Label>
          <Form.Control
            type="text"
            name="firstName"
            placeholder={user.firstName}
            onChange={handleInputChange}
            value={formState.firstName}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label html="lastName">Last Name:</Form.Label>
          <Form.Control
            type="text"
            name="lastName"
            placeholder={user.lastName}
            onChange={handleInputChange}
            value={formState.lastName}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label html="age">Age:</Form.Label>
          <Form.Control
            type="text"
            name="age"
            placeholder={user.age}
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
