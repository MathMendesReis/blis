import { Router } from "express";
import { CreateUserController } from "../controllers/create-user-controller";
import { UserDocumentController } from "../controllers/users-document-controller";
import multer from 'multer'
const upload = multer({ dest: 'uploads/' })
const userRouter = Router();
const createUser = new CreateUserController()
userRouter.post('/',createUser.handle );
userRouter.post('/documents',new UserDocumentController().handle );
export { userRouter };