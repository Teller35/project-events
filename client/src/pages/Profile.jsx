import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { ALL_MEETINGS, GET_ME } from "../utils/queries";
import Events from "../components/Events";
import Auth from "../utils/auth";

// const Profile = () => {
//   const { loading, data } = useQuery(ALL_MEETINGS);
//   const { data: userData } = useQuery(GET_ME);
//   const meetings = data?.meetings || [];
//   const loggedIn = Auth.loggedIn();

//   return (
//     <div>
//         <div className="updateUserInfo"

//     </div>
//   );
// };

// export default Profile;