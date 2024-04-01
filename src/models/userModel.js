import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: [true, "firstname is required"],
      unique: true,
      trim: true,
      lowerCase: true,
      index: true,
    },
    lastName: {
      type: String,
      unique: true,
      trim: true,
      lowerCase: true,
      index: true,
    },
    email: {
      type: String,
      required: [true, "email is required"],
      unique: true,
      trim: true,
      lowerCase: true,
    },
    avatar: {
      type: {
        public_id: String,
        url: String, //cloudinary url
      },
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    domain: {
      type: String,
      required: true,
      trim: true,
      lowerCase: true,
    },
    available: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);
