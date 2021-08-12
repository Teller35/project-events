import gql from "graphql-tag";

export const ADD_USER = gql`
  mutation AddUser(
    $username: String!
    $email: String!
    $password: String!
    $firstName: String!
    $lastName: String!
    $age: String!
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
  mutation addMeeting(
    $place: String!
    $meetingType: String!
    $city: String!
    $state: String!
    $date: String!
  ) {
    addMeeting(
      place: $place
      city: $city
      state: $state
      meetingType: $meetingType
      date: $date
    ) {
      _id
      username
      place
      city
      state
      meetingType
      createdAt
      date
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
