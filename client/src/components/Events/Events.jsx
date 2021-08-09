import React, { useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import { useQuery, useMutation } from "@apollo/react-hooks";
// import { idbPromise } from "../../utils/helpers";
import { MEETINGS } from "../../utils/queries";
import { ADD_MEETING } from "../../utils/mutations";


const Events = () => {
  const { data } = useQuery(MEETINGS);
  const meetData = data?.meet || [];
  const meetDataLength = Object.keys(meetData).length;

  if (!meetDataLength) {
      return <h2>No events yet...</h2>  
  }
  return (
  <div>
      <h2>Events</h2>
      {meetData.savedMeet.length}
      <div>
          {meetData.savedMeet.map((meeting) => {
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                    <Card.Title>{meeting.meetingType}</Card.Title>
                    <Card.Subtitle>By: {meeting.username}</Card.Subtitle>
                    <Card.Text>
                        Please join me for my {meeting.meetingType} event at {meeting.place}. The {meeting.meetingType} will be at {meeting.meetingTime} look forward to seeing you there.
                    </Card.Text>
                </Card.Body>
              </Card>
          })}
      </div>
  </div>
  )
};

export default Events;
