import { gql } from "@apollo/client";

export const GET_ME = gql`
  {
    me {
      _id
      username
      email
      firstName
      lastName
      age
      friendsCount
      meetings {
        _id
        createdAt
        meetingTime
        meetingType
        reactionsCount
        reactions {
          _id
          createdAt
          reactionBody
          username
        }
      }
      friends {
        _id
        username
      }
    }
  }
`;

export const GET_ALL = gql`
  {
    users {
      _id
      username
      email
      firstName
      lastName
      age
      friendsCount
      meetings {
        _id
        meetingTime
        place
        meetingTime
        createdAt
        reactionsCount
        reactions {
          _id
          reactionBody
          createdAt
          username
        }
      }
    }
    `;

export const MEETINGS = gql`
    meetings {
      _id
      username
      meetingType
      meetingTime
      place
      createdAt
      reactionsCount
    }
  `;
