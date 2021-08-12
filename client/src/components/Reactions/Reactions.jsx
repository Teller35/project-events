import React from "react";
import { Card } from "react-bootstrap";

const Reactions = ({ reactions }) => {
return (
    <div>
        {reactions &&
        reactions.map(reaction => (
          <p>{reaction.reactionBody} || by {reaction.username} on {reaction.createdAt}</p>  
        ))}
    </div>
)
}

export default Reactions;