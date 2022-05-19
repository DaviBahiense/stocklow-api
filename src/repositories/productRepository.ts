import { prisma } from "../database.js";
import { CreateProduct } from "../services/productService.js";

async function insert(newProduct: CreateProduct) {
  return prisma.product.create({
    data: newProduct,
  });
}

export default {
  insert,
};
