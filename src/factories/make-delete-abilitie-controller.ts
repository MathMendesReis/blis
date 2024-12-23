import { CreateUserController } from "../controllers/create-user-controller"
import { DeleteAbilitiesController } from "../controllers/delete-abilities-controller"
import { DeleteAbilitiesUseCase } from "../domain/users/use-case/delete-abilitie-use-case"

export function makeDeleteAbilitiesController() {
  return new DeleteAbilitiesController(new DeleteAbilitiesUseCase())
}