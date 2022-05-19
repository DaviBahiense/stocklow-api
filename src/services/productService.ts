import { Product } from "@prisma/client";
import productRepository from "../repositories/productRepository.js";

export type CreateProduct = Omit<Product, "id">;

async function create(newProduct: CreateProduct) {
  await productRepository.insert(newProduct);
}

export default {
  create,
};
