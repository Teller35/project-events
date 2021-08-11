import React, { useState } from "react";
import { Modal, Form, Button, Alert } from "react-bootstrap";
import { useMutation } from "@apollo/react-hooks";
import { ADD_REACTION } from "../../utils/mutations";

const ReactionForm = ({ meetingId }) => {
  const [reactionBody, setReactionBody] = useState("");
  const [characterCount, setCharacterCount] = useState(0);
  const [validated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const handleModalClose = useState(false);
  const [addReaction, { error }] = useMutation(ADD_REACTION);

  const handleInputChange = (event) => {
    if (event.target.value.length <= 280) 
    setReactionBody(event.target.value);
    setCharacterCount(event.target.value.length);
  };

  const handleFormSubmit = async (event) => {
    try {
      await addReaction({
        variables: { reactionBody, meetingId },
      });
      setReactionBody("");
      setCharacterCount(0);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
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
            <Form.Label className={`${characterCount === 280 || error ? "text-error" : ""}`}>
                What is on your mind <span>{characterCount}/280{error && <span>Something went wrong...</span>}</span>
                </Form.Label>
            <Form.Control
              as="textarea"
              placeholder="Leave comment here"
              name="reactionBody"
              onChange={handleInputChange}
              value={reactionBody}
              required
            />
          </Form.Group>
          <Modal.Footer>
            <Button
              disabled={!reactionBody}
              type="submit"
              onClick={handleModalClose}
            >
              Comment
            </Button>
          </Modal.Footer>
        </Form>
      </>
    </div>
  );
};

export default ReactionForm;
