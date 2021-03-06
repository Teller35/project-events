import gql from "graphql-tag";

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
        date
        place
        city
        state
        category
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
        date
        place
        city
        state
        category
        meetingType
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
  }
`;

export const SINGLE_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      friendsCount
      meetings {
        _id
        createdAt
        date
        place
        city
        state
        category
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

export const ALL_MEETINGS = gql`
  {
    allMeetings {
      _id
      date
      createdAt
      meetingType
      place
      city
      state
      category
      reactionsCount
      reactions {
        reactionBody
        username
        createdAt
      }
    }
  }
`;

export const MEETINGS = gql`
  {
    meetings {
      _id
      username
      meetingType
      date
      place
      city
      state
      category
      createdAt
      reactionsCount
    }
  }
`;

export const SINGLE_MEETING = gql`
  query SINGLE_MEETING($id: ID!) {
    singleMeeting(_id: $id) {
      meetingType
      username
      date
      place
      city
      state
      category
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

export const SEARCH_CATEGORY = gql`
  query SEARCH_CATEGORY($category: String!) {
    searchCategory(category: $category) {
      date
      meetingType
      username
      place
      city
      state
      category
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

export const ADD_FRIEND = gql`
  mutation ADD_FRIEND($id: ID!) {
    addFriend(friendId: $id) {
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