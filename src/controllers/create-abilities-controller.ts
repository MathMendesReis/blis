import { Request, Response } from "express";
import z from "zod";
import { prisma } from "../database/prisma";
import { AppError } from "../utils/app-error";
export class UserAbilitiesController {
  async handle(req:Request, res:Response) {
  
    const bodySchema = z.object({
      name:  z.string().toLowerCase(),
      active:  z.boolean().nullish(),
    })
    const {name,active} =bodySchema.parse(req.body)
    const abilitiesExists = await prisma.abilities.findMany({
      where:{
        name
      }
    })
    if(abilitiesExists.length !== 0){
        throw new AppError('Ability already exists',401)
    }
    const abilities = await prisma.abilities.create({
      data:{
        name:name,
        active: typeof active === 'boolean' ? active : true
      }
    })


    res.status(201).json({abilities})
  }
}


