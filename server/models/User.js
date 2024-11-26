import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["student", "admin"], // Explicitly define possible roles
      default: "student",        // Default role is 'student'
    },
    resetPasswordExpire: Date,   // To handle password reset functionality
  },
  {
    timestamps: true,            // Automatically manage `createdAt` and `updatedAt`
  }
);

export const User = mongoose.model("User", schema);
