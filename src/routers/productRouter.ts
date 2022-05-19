import { Router } from "express";
import productController from "../controllers/productController.js";
import { ensureAuthenticatedMiddleware } from "../middlewares/ensureAuthenticatedMiddleware.js";

const productRouter = Router();

productRouter.post(
  "/new-product",
  ensureAuthenticatedMiddleware,
  productController.create
);

export default productRouter;
