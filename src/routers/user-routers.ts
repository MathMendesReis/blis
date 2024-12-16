import { Router } from "express";
import { CreateUserController } from "../controllers/create-user-controller";
import { ensureAuthenticate } from "../midlewares/ensure-authenticate";
import { CreateUserAbilitiesController } from "../controllers/create-user-abilities-controller";
import { DeleteAbilitiesController } from "../controllers/delete-abilities-controller";
import { ListUserAbilitiesController } from "../controllers/list-user-abilities-controller";

const userRouter = Router();
userRouter.post('/',new CreateUserController().handle );
userRouter.post('/abilities',ensureAuthenticate, new CreateUserAbilitiesController().handle );
userRouter.delete('/abilities',ensureAuthenticate, new DeleteAbilitiesController().handle );
userRouter.get('/abilities',ensureAuthenticate, new ListUserAbilitiesController().handle );
export { userRouter };