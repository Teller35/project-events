const { Schema, model } = require("mongoose");
const reactionSchema = require("./Reaction");
const dateFormat = require("../utils/dateFormat");

const meetingsSchema = new Schema(
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

meetingsSchema.virtual("reactionsCount").get(function () {
  return this.reactions.length;
});

const Meetings = model("Meetings", meetingsSchema);

module.exports = Meetings;
