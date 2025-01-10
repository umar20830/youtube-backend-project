import mongoose, { Schema } from "mongoose";

const subscriptionSchema = new Schema(
  {
    subscriber: {
      type: Schema.Types.ObjectId, // Jo subscribe karai ga
      ref: "User",
    },
    channel: {
      type: Schema.Types.ObjectId, // Jiska channel hai
      ref: "User",
    },
  },
  {
    timestamps: true,
  },
);

export const Subscription = mongoose.model("Subscription", subscriptionSchema);
