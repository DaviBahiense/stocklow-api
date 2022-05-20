import { prisma } from "../database.js";
import { CreateProduct } from "../services/productService.js";

async function insert(newProduct: CreateProduct) {
  return prisma.product.create({
    data: newProduct,
  });
}

async function find(userId: number) {
  const productsByCategory = await prisma.category.findMany({
    include: {
      products: {
        where: { userId: userId },
        select: { product: true, unity: true, quantity: true },
      },
    },
  });

  return productsByCategory;
}

export default {
  insert,
  find,
};
