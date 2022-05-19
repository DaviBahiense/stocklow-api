import { Request, Response } from "express";
import productService from "../services/productService.js";

async function create(req: Request, res: Response) {
  const userId = res.locals.user.id;
  const newProduct = { userId: userId, ...req.body };

  await productService.create(newProduct);

  res.sendStatus(201);
}

export default {
  create,
};
