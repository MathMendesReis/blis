import { CreateUserController } from "../controllers/create-user-controller"
import { CreateUserUsecase } from "../domain/users/use-case/create-user-use-case"

export function makeCreateUserController() {
  return new CreateUserController(new CreateUserUsecase())
}