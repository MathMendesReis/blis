import { Router } from "express";
import { UserAbilitiesController } from "../controllers/create-abilities-controller";
import { ActivateDeactivateAbilitiesController } from "../controllers/activate-deactivate-abilities-controller";
import { ensureAuthenticate } from "../midlewares/ensure-authenticate";

const abilitiesRouter = Router();
abilitiesRouter.use(ensureAuthenticate)
abilitiesRouter.post('/',new UserAbilitiesController().handle );
abilitiesRouter.put('/:abilitiesId', new ActivateDeactivateAbilitiesController().handle );
export { abilitiesRouter };