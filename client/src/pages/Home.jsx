import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { ALL_MEETINGS, GET_ME } from "../utils/queries";
import Events from "../components/Events";
import Auth from "../utils/auth";

const Home = () => {
  const { loading, data } = useQuery(ALL_MEETINGS);

  const meetings = data?.allMeetings || [];

  const loggedIn = Auth.loggedIn();

  return (
    <div>
            <Events
            meetings={meetings}
            title="This is what is going on...."
            />
    </div>
  );
};

export default Home;
