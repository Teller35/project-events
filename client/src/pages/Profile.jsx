import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { Redirect, useParams } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { GET_ME, SINGLE_USER } from "../utils/queries";
import UpdateUserInfo from "../components/UpdateUserInfo";
import MyEvents from "../components/MyEvents";
import FriendList from "../components/FriendList";
import { ADD_FRIEND } from "../utils/queries";
import Auth from "../utils/auth";

const Profile = (props) => {
  const [addFriend] = useMutation(ADD_FRIEND);

  const { username: userParam } = useParams();

  const { loading, data } = useQuery(userParam ? SINGLE_USER : GET_ME, {
    variables: { username: userParam },
  });
  const user = data?.me || data?.user || {};

  const handleInputChange = async () => {
    try {
      await addFriend({
        variables: { id: user._id },
      });
    } catch (e) {
      console.error(e);
    }
  };
  const [show, setShow] = useState(false);

  // redirect to personal profile page if username is yours
  if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
    return <Redirect to="/profile" />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user?.username) {
    return (
      <h4>
        You need to be logged in to see this. Use the navigation links to sign
        up or log in!
      </h4>
    );
  }

  return (
    <div className="flex-row mb-3">
      <h2>Welcome to {userParam ? `${user.username}'s` : "your"} profile.</h2>
      <div>
        <div>
          {!userParam && (
            <div className="updateUserInfo">
              <button className="MySecondButton" onClick={() => setShow(true)}>
                Update Information
              </button>
              <Modal
                show={show}
                onHide={() => setShow(false)}
                backdrop="static"
                keyboard={false}
              >
                <Modal.Header closeButton>
                  <Modal.Title>Update User Info</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <UpdateUserInfo
                    handleModalClose={() => setShow(false)}
                    user={user}
                  />
                </Modal.Body>
              </Modal>
            </div>
          )}
        </div>
        {userParam && (
          <button className="MySecondButton" onClick={handleInputChange}>
            Add Friend
          </button>
        )}
      </div>

      <div className="col-12 col-lg-3 mb-3">
        <FriendList
          username={user.username}
          friendCount={user.friendCount}
          friends={user.friends}
        />
      </div>
      <div className="userevents">
        {userParam && <MyEvents user={user} myMeetings={user.meetings} />}{" "}
      </div>
    </div>
  );
};

export default Profile;
