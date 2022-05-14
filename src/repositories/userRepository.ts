import { prisma } from "../database.js";
import { CreateUserData } from "../services/userService.js";

async function findById(id: number) {
  return prisma.user.findUnique({
    where: {
      id,
    },
  });
}
async function findByName(name: string) {
  return prisma.user.findUnique({
    where: {
      name,
    },
  });
}

async function insert(createUserData: CreateUserData) {
  return prisma.user.create({
    data: createUserData,
  });
}

export default {
  findByName,
  findById,
  insert,
};
