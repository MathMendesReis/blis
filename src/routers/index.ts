import { Router } from "express";
import { userRouter } from "./user-routers";
import { sessionRouter } from "./session-router";
import { abilitiesRouter } from "./abilities-router";
import { documentsRouter } from "./documents-router";

const router = Router()
router.use('/api/users', userRouter)
router.use('/api/session', sessionRouter)
router.use('/api/abilities', abilitiesRouter)
router.use('/api/documents', documentsRouter)
export { router }