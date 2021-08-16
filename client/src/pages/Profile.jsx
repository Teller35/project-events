import React from "react";
import { Redirect, useParams } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { GET_ME } from "../utils/queries";
import UpdateUserInfo from "../components/UpdateUserInfo";
import MyEvents from "../components/MyEvents";
import FriendList from '../components/FriendList';



import { ADD_FRIEND } from '../utils/mutations';
import Auth from '../utils/auth';




const Profile = props => {
  const { username: userParam } = useParams();
  
  const [addFriend] = useMutation(ADD_FRIEND);
  const { loading, data } = useQuery(userParam ? GET_ME : GET_ME, {
    variables: { username: userParam }
  });
  const myMeetings = data?.meetings || [];
  const user = data?.me || data?.user || {};

  // redirect to personal profile page if username is yours
  if (
    Auth.loggedIn() &&
    Auth.getProfile().data.username === userParam
  ) {
    return <Redirect to="/profile" />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user?.username) {
    return (
      <h4>
        You need to be logged in to see this. Use the navigation links above to sign up or log in!
      </h4>
    );
  }

  const handleClick = async () => {
    try {
      await addFriend({
        variables: { id: user._id }
      });
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      <div>
          <div className="updateUserInfo">
            <UpdateUserInfo> 
            <p>Click below to update User Information</p>
            </UpdateUserInfo> 
          </div>  
      </div>
    
    
    

   
      <div className="flex-row mb-3">
        <h2 className="bg-dark text-secondary p-3 display-inline-block">
          Viewing {userParam ? `${user.username}'s` : 'your'} profile.
        </h2>

        {userParam && (
          <button className="btn ml-auto" onClick={handleClick}>
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
        <div className="userevents">{!userParam && <MyEvents myMeetings={myMeetings}/>
        }
        // </div>
       </div>
  )
};

export default Profile;