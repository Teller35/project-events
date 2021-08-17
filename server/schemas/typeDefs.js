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
    meetings: [Meeting]
    friends: [User]
  }

  type Meeting {
    _id: ID
    date: String
    username: String
    place: String
    city: String
    state: String
    category: String
    meetingType: String
    createdAt: String
    reactionsCount: Int
    reactions: [Reactions]
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
    meetings(username: String!): [Meeting]
    singleMeeting(_id: ID!): Meeting
    allMeetings: [Meeting]
    searchCategory(category: String!): [Meeting]
  }

  type Mutation {
    addUser(
      username: String!
      email: String!
      password: String!
      firstName: String!
      lastName: String!
      age: String!
    ): Auth

    addReaction(meetingId: ID!, reactionBody: String!): Meeting

    addMeeting(
      place: String!
      city: String!
      state: String!
      category: String!
      meetingType: String!
      date: String!
    ): Meeting

    addFriend(friendId: ID!): User

    updateUser(
      username: String
      firstName: String
      lastName: String
      email: String
      password: String
      age: String
    ): User

    updateMeeting(
      _id: ID!
      date: String
      place: String
      city: String
      state: String
      category: String
      meetingType: String
    ): Meeting

    deleteMeeting(meetingId: String): Meeting

    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
