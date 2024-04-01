import mongoose, { isValidObjectId } from "mongoose";
import { User } from "../models/userModel.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const getAllUsers = asyncHandler(async (req, res) => {
  res.send("getting all user");
});

const getUserById = asyncHandler(async (req, res) => {
  res.send("get user by id");
});

const createNewUser = asyncHandler(async (req, res) => {
  res.send("created new user");
});

const deleteUserById = asyncHandler(async (req, res) => {
  res.send("deleted user");
});

const updateUserById = asyncHandler(async (req, res) => {
  res.send("updated user");
});

export {
  getAllUsers,
  getUserById,
  createNewUser,
  deleteUserById,
  updateUserById,
};
