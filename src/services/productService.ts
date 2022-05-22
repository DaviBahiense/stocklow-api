import { Product } from "@prisma/client";
import productRepository from "../repositories/productRepository.js";

export type CreateProduct = Omit<Product, "id">;

async function create(newProduct: CreateProduct) {
  await productRepository.insert(newProduct);
}

async function getProducts(userId: number) {
  const data = await productRepository.find(userId);

  const products = data.map((e) => {
    return {
      category: e.category,
      product: e.products,
    };
  });

  return products;
}

async function getCategories() {
  return await productRepository.findCategories();
}

export default {
  create,
  getProducts,
  getCategories,
};
