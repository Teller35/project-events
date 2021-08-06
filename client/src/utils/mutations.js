import gql from "graphql-tag";

export const ADD_USER = gql`
  mutation ADD_USER(
    $username: String!
    $email: String!
    $password: String!
    $firstName: String!
    $lastName: String!
    $age: Int!
  ) {
    addUser(
      username: $username
      email: $email
      password: $password
      firstName: $firstName
      lastName: $lastName
      age: $age
    ) {
      token
      user {
        _id
        username
        email
        firstName
        lastName
        age
      }
    }
  }
`;

export const ADD_MEETING = gql`
  mutation ADD_MEETING(
    $meetingTime: Int!
    $place: String!
    $meetingType: String!
  ) {
    addMeeting(
      meetingTime: $meetingTime
      place: $place
      meetingType: $meetingType
    ) {
      _id
      meetingTime
      username
      place
      meetingTime
      createdAt
    }
  }
`;

export const ADD_REACTION = gql`
  mutation ADD_REACTION($meetingId: ID!, $reactionBody: String!) {
    addReaction(meetingId: $meetingId, reactionBody: $reactionBody) {
      _id
      reactionsCount
      reactions {
        _id
        reactionBody
        username
        createdAt
      }
    }
  }
`;

export const ADD_FRIEND = gql`
  mutation ADD_FRIEND($friendId: ID!) {
    addFriend(friendId: $friendId) {
      _id
      username
      friendsCount
      friends {
        _id
        username
      }
    }
  }
`;

export const LOGIN = gql`
  mutation LOGIN($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
        email
      }
    }
  }
`;

export const UPDATE_USER = gql`
  mutation UPDATE_USER(
    $username: String
    $email: String
    $password: String
    $firstName: String
    $lastName: String
    $age: Int
  ) {
    updateUser(
      username: $username
      email: $email
      password: $password
      firstName: $firstName
      lastName: $lastName
      age: $age
    ) {
      username
      email
      firstName
      lastName
      age
    }
  }
`;

export const DELETE_MEETING = gql`
  mutation DELETE_MEETING($meetingId: String!) {
    deleteMeeting(meetingId: $meetingId) {
      _id
    }
  }
`;
