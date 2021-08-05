const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    firstName: String
    lastName: String
    age: Int
    friendsCount: Int
    meetingsPlanned: [Meetings]
    friends: [User]
  }

  type Category {
    _id: ID
    name: String
  }

  type Meetings {
    _id: ID
    meetingTime: String
    username: String
    place: String
    meetingType: String
    createdAt: String
    reactionsCount: Int
    reactions: [Reaction]
  }

  type Reactions {
    _id: ID
    reactionBody: String
    createdAt: String
    username: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Checkout {
    session: ID
  }

  type Query {
    me: User
    users: [User]
    user(username: String!): User
    meetings(username: String!): [Meetings]
    singleMeeting(_id: ID!): Meetings
    allMeetings: [Meetings]
  }

  type Mutation {
    addUser(
      username: String!
      email: String!
      password: String!
      firstName: String!
      lastName: String!
      age: Int!
    ): Auth

    addReaction(meetingId: ID!, reactionBody: String!): Meeting

    addMeetings(
      meetingTime: String!
      place: String!
      meetingType: String!
    ): Meetings

    addFriend(friendId: ID!): User

    updateUser(
      username: String
      firstName: String
      lastName: String
      email: String
      password: String
      age: Int
    ): User

    updateMeeting(
      meetingTime: String
      place: String
      meetingType: String
    ): Meeting

    deleteMeeting(meetingId: String): User

    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
