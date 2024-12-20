import { Router } from "express";
import { SessionController } from "../controllers/session-controller";

const sessionRouter = Router(); 

sessionRouter.post('/login',new SessionController().handle  )
export { sessionRouter };