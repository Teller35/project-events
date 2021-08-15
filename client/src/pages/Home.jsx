import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { ALL_MEETINGS } from "../utils/queries";
import Events from "../components/Events";
import Auth from "../utils/auth";

const Home = () => {
  const { data } = useQuery(ALL_MEETINGS);

  const meetings = data?.allMeetings || [];

  const loggedIn = Auth.loggedIn();

  return (
    <div>
      {loggedIn && (
        <div>
          <Events meetings={meetings} title="This is what is going on...." />
        </div>
      )}
    </div>
  );
};

export default Home;
