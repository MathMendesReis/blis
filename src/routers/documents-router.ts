import { Router } from "express";
import { UserDocumentController } from "../controllers/users-document-controller";
import { upload } from "../utils/multer-config";
import { ensureAuthenticate } from "../midlewares/ensure-authenticate";

const documentsRouter = Router();
documentsRouter.post('/',ensureAuthenticate, upload.single('uploaded_file'),new UserDocumentController().handle );
export { documentsRouter };