import { Router } from "express";
import { prisma } from "../database/prisma";
import { CreateUserController } from "../controllers/create-user-controller";

const userRouter = Router();
const createUser = new CreateUserController()
userRouter.post('/',createUser.handle );
export { userRouter };