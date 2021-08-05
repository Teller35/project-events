const { Schema, model } = require("mongoose");
const reactionSchema = require("./Reaction");
const dateFormat = require("../utils/dateFormat");

const meetingSchema = new Schema(
  {
    meetingTime: {
      type: Date,
      default: Date.now,
      get: timestamp => dateFormat(timestamp)
    },
    username: {
      type: String,
      required: true
    },
    place: {
      type: String,
      required: true,
      maxLength: 280,
    },
    meetingType: {
      type: String,
      required: true,
      maxLength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: timestamp => dateFormat(timestamp)
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
