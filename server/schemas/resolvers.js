const { User, Meeting } = require("../models");
const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findOne({ _id: context.user._id })
          .select("-__v -password")
          .populate("meetings")
          .populate("friends");
        return user;
      }
      throw new AuthenticationError("Not logged in!");
    },
    users: async () => {
      return await User.find()
        .select("-__v -password")
        .populate("friends")
        .populate("meetings");
    },
    user: async (parent, { username }) => {
      return User.findOne({ username })
      .select("-__v -password")
      .populate("meetings")
      .populate("friends")
    },
    meetings: async (parent, { username }) => {
      const params = username ? { username } : {};
      return User.find(params).populate("meetings").populate("reactions");
    },
    allMeetings: async () => {
      return await Meeting.find().populate("reactions");
    },
    singleMeeting: async (parent, { _id }) => {
      return Meeting.findOne({ _id });
    },
    searchCategory: async (parent, { category }) => {
      const params = category ? { category } : {};
      return Meeting.find(params).populate("meetings").populate("reactions");
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);
      return { token, user };
    },
    addMeeting: async (parent, args, context) => {
      if (context.user) {
        const meeting = await Meeting.create({
          ...args,
          username: context.user.username,
        });
        await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { meetings: meeting._id } },
          { new: true }
        );
        return meeting;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    addReaction: async (parent, { meetingId, reactionBody }, context) => {
      if (context.user) {
        const updatedMeeting = await Meeting.findOneAndUpdate(
          { _id: meetingId },
          {
            $push: {
              reactions: { reactionBody, username: context.user.username },
            },
          },
          { new: true, runValidators: true }
        );
        return updatedMeeting;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    addFriend: async (parent, { friendId }, context) => {
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { friends: friendId } },
          { new: true }
        ).populate("friends");
        return updatedUser;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, {
          new: true,
        });
      }
      throw new AuthenticationError("Need to be logged in!");
    },
    // updateMeeting: async (parent, { _id, args }, context) => {
    //   if (context.user) {
    //     return await Meeting.findByIdAndUpdate(_id, args, {
    //       new: true
    //     })
    //   }
    //   throw new AuthenticationError("Need to be logged in!");
    // },
    deleteMeeting: async (parent, { meetingId }, context) => {
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { meetings: meetingId } },
          { new: true }
        );
        return updatedUser;
      }
      throw new AuthenticationError("Need to be logged in!");
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw new AuthenticationError("Incorrect Credentials!");
      }
      const correctPw = await user.isCorrectPassword(password);
      if (!correctPw) {
        throw new AuthenticationError("Incorrect Credentials!");
      }
      const token = signToken(user);
      return { token, user };
    },
  },
};

module.exports = resolvers;
