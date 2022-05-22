import { Request, Response } from "express";
import productService from "../services/productService.js";

async function create(req: Request, res: Response) {
  const userId = res.locals.user.id;
  const newProduct = { userId: userId, ...req.body };

  await productService.create(newProduct);

  res.sendStatus(201);
}

async function getProducts(req: Request, res: Response) {
  const userId = res.locals.user.id;

  const products = await productService.getProducts(userId);

  res.send(products);
}

async function getCategories(req: Request, res: Response) {
  const categories = await productService.getCategories();

  res.send(categories);
}

export default {
  create,
  getProducts,
  getCategories,
};
