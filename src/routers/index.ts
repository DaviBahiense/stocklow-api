import { Router } from "express";

import userRouter from "./userRouter.js";
import productRouter from "./productRouter.js";

const router = Router();
router.use(userRouter);
router.use(productRouter);

export default router;
