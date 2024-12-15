import { Router } from "express";
import { userRouter } from "./user-routers";
import { sessionRouter } from "./session-router";

const router = Router()
router.use('/api/users', userRouter)
router.use('/api/session', sessionRouter)
export { router }