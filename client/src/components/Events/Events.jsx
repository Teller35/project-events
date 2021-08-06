import React, { useEffect } from "react";
import { useQuery, useMutation } from "@apollo/client";
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
              <div className="card" style="width: 18rem;">
                  <div className="card-body">
                      <h5 className="card-title">{meeting.meetingType}</h5>
                      <h6 className="card-subtitle">{meeting.username}</h6>
                      <p className="card-text">
                          Join me for my event {meeting.meetingType} at {meeting.place}. The event will start at {meeting.meetingTime} .
                      </p>
                  </div>
              </div>
          })}
      </div>
  </div>
  )
};

export default Events;
