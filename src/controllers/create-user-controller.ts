import { Request, Response } from "express";
import z from "zod";
import type { CreateUserUsecase } from "../domain/users/use-case/create-user-use-case";


export class CreateUserController {
  constructor(
    private createUserUseCase:CreateUserUsecase
  ){}
  public handle = async (request:Request, response:Response) => {
    const bodySchema = z.object({
      name: z.string(),
      birthdate:  z.string(),
      email:  z.string(),
      password:  z.string(),
    })
    const { name, birthdate, email, password } = bodySchema.parse(request.body)
    const res = await this.createUserUseCase.execute({name, birthdate, email, password})
  
    response.status(201).json()

  }
 
}