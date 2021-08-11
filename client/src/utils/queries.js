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
        time
        date
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
        time
        date
        place
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

export const ALL_MEETINGS = gql`
  {
    allMeetings {
      _id
      date
      createdAt
      time
      meetingType
      place
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
      time
      date
      place
      createdAt
      reactionsCount
    }
  }
`;

export const SINGLE_MEETING = gql`
  query SINGLE_MEETING($id: ID!) {
    singleMeeting(_id: $id) {
      time
      meetingType
      username
      date
      place
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
