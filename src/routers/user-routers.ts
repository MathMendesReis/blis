import { Router } from "express";
import { CreateUserController } from "../controllers/create-user-controller";
import { UserDocumentController } from "../controllers/users-document-controller";
import { upload } from "../utils/multer-config";
import { ensureAuthenticate } from "../midlewares/ensure-authenticate";

const userRouter = Router();
userRouter.post('/',new CreateUserController().handle );
userRouter.post('/documents',ensureAuthenticate, upload.single('uploaded_file'),new UserDocumentController().handle );
export { userRouter };