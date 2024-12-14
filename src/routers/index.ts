import { Router } from "express";
import { userRouter } from "./user-routers";

const router = Router()
router.use('/api/users', userRouter)
export { router }