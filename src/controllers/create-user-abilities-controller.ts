import { Request, Response } from "express";
import z from "zod";
import { prisma } from "../database/prisma";
import { AppError } from "../utils/app-error";
export class CreateUserAbilitiesController {
  async handle(req:Request, res:Response) {
  
    const bodySchema = z.object({
      yearsExperience:z.number(),
      abilitiesId:z.string(),
    })
  
    const {yearsExperience,abilitiesId} =bodySchema.parse(req.body)

    const abilities = await prisma.abilities.findFirst({
      where:{
        id:abilitiesId
      }
    })

    if(!abilities){
      throw new AppError('Ability not found',404)
    }


    if(abilities.active === false){
      throw new AppError('Ability is not active',400)
    }

    await prisma.usersAbilities.create({
      data:{
        userId:req.user?.id as string,
        abilityId:abilitiesId,
        yearsExperience:yearsExperience
    }
    })


    res.status(201).json()
  } 
}

