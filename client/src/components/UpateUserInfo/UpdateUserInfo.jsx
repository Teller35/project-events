import React, { useEffect, useState } from "react";
import { Form, Button, Alert, Modal } from "react-bootstrap";
import { useMutation } from "@apollo/react-hooks";
import { UPDATE_USER } from "../../utils/mutations";


const UpdateUserInfoForm = ({ handleModalClose }) => {
    const [formState, setFormState] = useState({
        username: "",
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        age: "",
    })
    const [updateUser, { error }] = useMutation(UPDATE_USER);
    const [validated] = useState(false);
    const [showAlert, setShowAlert] = useState(false);

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log(formState);
        try {
          const { data } = await updateUser({
            variables: { ...formState },
          })
        } catch (error) {
          console.log(error);
        }
        }
      };


      const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormState({ ...formState, [name]: value })
      }

    return (
      <>
        <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
          <Alert dismissible onClose={() => getShowAlert(false)} show={showAlert}>
            Something went wrong!
          </Alert>

          <Form.Group>
            <Form.Label html="userName"> Username: </Form.Label>
            <Form.Control
            type="text"
            placeholder="Update Username"
            name="userName"
            onChange={handleInputChange}
          />
          </Form.Group>
          <Form.Group>
            <Form.Label html="firstName"> First Name: </Form.Label>
            <Form.Control
            type="text"
            placeholder="Update User First Name"
            name="firstName"
            onChange={handleInputChange}
          />
          </Form.Group>
          <Form.Group>
            <Form.Label html="lastName"> Last Name: </Form.Label>
            <Form.Control
            type="text"
            placeholder="Update User Last Name"
            name="lastName"
            onChange={handleInputChange}
          />
          </Form.Group>
          <Form.Group>
            <Form.Label html="updateAge"> Age: </Form.Label>
            <Form.Control
            type="text"
            placeholder="Update Age"
            name="updateAge"
            onChange={handleInputChange}
          />
          </Form.Group>
          <Form.Group>
            <Form.Label html="updateEmail"> Email Address: </Form.Label>
            <Form.Control
            type="text"
            placeholder="Update Email"
            name="updateEmail"
            onChange={handleInputChange}
          />
          </Form.Group>
          <Modal.Footer>
            <Button
            type="submit"
            onClick={handleModalClose}
          ></Button>
          </Modal.Footer>
        </Form>
      </>
  );
};  
      
            
export default UpdateUserInfo;