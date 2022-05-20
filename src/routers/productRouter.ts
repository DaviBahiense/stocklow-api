import { Router } from "express";
import productController from "../controllers/productController.js";
import { ensureAuthenticatedMiddleware } from "../middlewares/ensureAuthenticatedMiddleware.js";

const productRouter = Router();

productRouter.post(
  "/products",
  ensureAuthenticatedMiddleware,
  productController.create
);

productRouter.get(
  "/products",
  ensureAuthenticatedMiddleware,
  productController.getProducts
);

export default productRouter;
