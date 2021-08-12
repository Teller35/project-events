import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { ALL_MEETINGS, GET_ME } from "../utils/queries";
import UpdateUserInfo from '../components/UpateUserInfo';
import MyEvents from '../components/MyEvents';
import FriendList from '../components/FriendList';



import { ADD_FRIEND } from '../utils/mutations';
import Auth from '../utils/auth';

const Profile = () => {

    const { username: userParams } = useParams();
    
    const [addFriend] = useMutation(ADD_FRIEND);
    const {loading, data } = useQuery(useParam ? GET_ME: GET_ME, {
        variables: { username: userParam }
    });

    const user = data?.me || data?.user || {};

    //redirect to personal profile page if username is yours
    if ( Auth.loggedIn() &&
    Auth.getProfile().data.username === userParam
    ) {
        return <Redirect to ="/profile" />;
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
          <div className="">
            <h2 className="">
              Viewing {userParam ? `${user.username}'s` : 'your'} profile.
            </h2>

        


            
            {/* {userParam && (
          <button className="btn ml-auto" onClick={handleClick}>
            Add Friend
          </button>
        )}
      </div> */}

    

        {/* <div className="">
          <FriendList
            username={user.username}
            friendCount={user.friendCount}
            friends={user.friends}
          />
        </div>
      </div>
      <div className="mb-3">{!userParam && <ThoughtForm />}</div>
    </div> */} */}
  );
};

export default Profile;