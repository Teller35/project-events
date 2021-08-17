import React, { useEffect, useState } from "react";
import { Form, Button, Alert, Modal } from "react-bootstrap";
import { useMutation } from "@apollo/react-hooks";
import { UPDATE_USER } from "../../utils/mutations";


const UpdateUserInfo = ({ handleModalClose, user }) => {
  const [formState, setFormState] = useState({
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    age: "",
  });
  const [show, setShow] = useState(false);


  const [updateUser, { error }] = useMutation(UPDATE_USER);
  const [validated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await updateUser({
        variables: { ...formState },
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
  };

  return (
    <>
    
      <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
        <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert}>
          Something went wrong!
        </Alert>

        <Form.Group>
          <Form.Label html="m-2 border border-5 rounded"> Username: </Form.Label>
          <Form.Control
            type="text"
            placeholder={user.username}
            name="userName"
            onChange={handleInputChange}
            value={formState.username}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label html="firstName"> First Name: </Form.Label>
          <Form.Control
            type="text"
            placeholder={user.firstName}
            name="firstName"
            onChange={handleInputChange}
            value={formState.firstName}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label html="lastName"> Last Name: </Form.Label>
          <Form.Control
            type="text"
            placeholder={user.lastName}
            name="lastName"
            onChange={handleInputChange}
            value={formState.lastName}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label html="updateAge"> Age: </Form.Label>
          <Form.Control
            type="text"
            placeholder={user.age}
            name="updateAge"
            onChange={handleInputChange}
            value={formState.age}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label html="updateEmail"> Email Address: </Form.Label>
          <Form.Control
            type="text"
            placeholder={user.email}
            name="updateEmail"
            onChange={handleInputChange}
            value={formState.email}
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
