import React from "react";
import { Link } from "react-router-dom";

const FriendList = ({ friendCount, username, friends }) => {
  if (!friends || !friends.length) {
    return (
      <h5>{username}, you need to make some friends!</h5>
    );
  }

  return (
    <div>
      <h5>
        {username}'s {friendCount} {friendCount === 1 ? "friend" : "friends"} list:
      </h5>
      {friends.map((friend) => (
        <div className="p-2">
          <Link className="MySecondButton" to={`/profile/${friend.username}`}>{friend.username}</Link>
        </div>
      ))}
    </div>
  );
};

export default FriendList;
