import { Request, Response } from "express";
import z from "zod";
import type { DeleteAbilitiesUseCase } from "../domain/users/use-case/delete-abilitie-use-case";
export class DeleteAbilitiesController {
  constructor(
    private readonly deleteAbilitiesUseCase: DeleteAbilitiesUseCase
  ){}

  public handle = async (req:Request, res:Response) => {
    const bodySchema = z.object({
      abilitiesId:z.array(z.string()),
    })
    const {abilitiesId} =bodySchema.parse(req.body)
    await this.deleteAbilitiesUseCase.execute({userId:req.user?.id as string,abilitiesId})
    res.status(204).json()
  }
}

