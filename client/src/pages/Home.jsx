import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { ALL_MEETINGS, GET_ME } from "../utils/queries";
import Events from "../components/Events";
import backGround from "../assets/large/Grand-Junction.jpg";
import Auth from "../utils/auth";

const Home = () => {
  const { loading, data } = useQuery(ALL_MEETINGS);


  const meetings = data?.allMeetings || [];

  const loggedIn = Auth.loggedIn();

  return (
    <div>
      <div>
        <Events meetings={meetings} title="This is what is going on...." />
      </div>
    </div>
  );
};

export default Home;
