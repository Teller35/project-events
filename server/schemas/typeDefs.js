const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Category {
    _id: ID
    name: String
  }

  type Event {
    _id: ID
    eventTime: String
    place: String
    eventType: String
    reactions: [Reaction]
  }

  type Reaction {
    _id: ID
    reactionBody: String
    createdAt: String
    username: String
  }

  type User {
    _id: ID
    username: String
    email: String
    firstName: String
    lastName: String
    age: Int
    eventsPlanned: [Event]
    friends: [User]
  }

  type Auth {
    token: ID
    user: User
  }

  type Checkout {
    session: ID
  }

  type Query {
    me: User
    users: [User]
    events: [Event]
  }

  type Mutation {
    addUser(username: String! firstName: String! lastName: String! email: String! password: String! age: Int!): Auth
    addReaction(eventId: ID!, reactionBody: String!): Event
    addEvent(eventTime: String!, place: String!, eventType: String!): Event
    addFriend(friendId: ID!): User
    updateUser(username: String firstName: String lastName: String email: String password: String age: Int): User
    updateEvent(eventTime: String, place: String, eventType: String): Event
    deleteEvent(eventId: String): User
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
