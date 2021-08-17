const { Schema, model } = require("mongoose");
const reactionSchema = require("./Reaction");
const dateFormat = require("../utils/dateFormat");
const timeFormat = require("../utils/timeFormat");

const meetingSchema = new Schema(
  {
    date: {
      type: String,
      required: true,
      get: (date) => timeFormat(date),
    },
    username: {
      type: String,
      required: true,
    },
    place: {
      type: String,
      required: true,
      maxLength: 280,
    },
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    meetingType: {
      type: String,
      required: true,
      maxLength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => dateFormat(timestamp),
    },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

meetingSchema.virtual("reactionsCount").get(function () {
  return this.reactions.length;
});

const Meeting = model("Meeting", meetingSchema);

module.exports = Meeting;
