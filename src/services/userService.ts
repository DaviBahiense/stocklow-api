import { User } from "@prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import userRepository from "../repositories/userRepository.js";
import {
  conflictError,
  notFoundError,
  unauthorizedError,
} from "../utils/errorUtils.js";

export type CreateUserData = Omit<User, "id">;

async function signUp(createUserData: CreateUserData) {
  const existingUser = await userRepository.findByName(createUserData.name);
  if (existingUser) throw conflictError("Name must be unique");

  const hashedPassword = bcrypt.hashSync(createUserData.password, 10);

  await userRepository.insert({ ...createUserData, password: hashedPassword });
}

async function signIn(loginData: CreateUserData) {
  const user = await getUserOrFail(loginData);

  const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET);

  return token;
}

async function findById(id: number) {
  const user = await userRepository.findById(id);
  if (!user) throw notFoundError("User not found");

  return user;
}

async function getUserOrFail(loginData: CreateUserData) {
  const user = await userRepository.findByName(loginData.name);
  if (!user) throw unauthorizedError("User not found");

  const isPasswordValid = bcrypt.compareSync(loginData.password, user.password);
  if (!isPasswordValid) throw unauthorizedError("Invalid credentials");

  return user;
}

export default {
  signUp,
  signIn,
  findById,
};
