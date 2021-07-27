const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    firstName: String
    lastName: String
  }

  type Query {
    users: [User]
  }

  type Mutation {
      addUser(username: String!, firstName: String!, lastName: String!, email: String!, password: String!): User
  }
`;

module.exports = typeDefs;
