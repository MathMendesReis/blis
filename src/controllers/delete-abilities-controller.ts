import { Request, Response } from "express";
import z from "zod";
import { prisma } from "../database/prisma";
import { AppError } from "../utils/app-error";
export class DeleteAbilitiesController {
  async handle(req:Request, res:Response) {
  
    const bodySchema = z.object({
      abilitiesId:z.array(z.string()),
    })
    const {abilitiesId} =bodySchema.parse(req.body)

    await prisma.usersAbilities.deleteMany({
      where:{
        userId:req.user?.id as string,
        abilityId:{
          in:abilitiesId
        }
      }
    })
  


    res.status(204).json()
  } 
}

