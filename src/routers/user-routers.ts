import { Router } from "express";
import { CreateUserController } from "../controllers/create-user-controller";
import { ensureAuthenticate } from "../midlewares/ensure-authenticate";
import { CreateUserAbilitiesController } from "../controllers/create-user-abilities-controller";
import { DeleteAbilitiesController } from "../controllers/delete-abilities-controller";
import { ListUserAbilitiesController } from "../controllers/list-user-abilities-controller";
import { makeCreateUserController } from "../factories/make-create-user-controller";
import { makeDeleteAbilitiesController } from "../factories/make-delete-abilitie-controller";

const userRouter = Router();
userRouter.get('/abilities',ensureAuthenticate, new ListUserAbilitiesController().handle );
userRouter.post('/',makeCreateUserController().handle );
userRouter.post('/abilities',ensureAuthenticate, new CreateUserAbilitiesController().handle );
userRouter.delete('/abilities',ensureAuthenticate, makeDeleteAbilitiesController().handle );
export { userRouter };