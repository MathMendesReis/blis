import { Router } from "express";
import { userRouter } from "./user-routers";
import { sessionRouter } from "./session-router";
import { abilitiesRouter } from "./abilities-router";
import { documentsRouter } from "./documents-router";
import { abilitiesRouterPath, documentsRouterPath, sessionRouterPath, userRouterPath } from "../utils/router-paths";

const router = Router()
router.use(userRouterPath, userRouter)
router.use(sessionRouterPath, sessionRouter)
router.use(abilitiesRouterPath, abilitiesRouter)
router.use(documentsRouterPath, documentsRouter)
export { router }