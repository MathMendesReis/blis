import z from "zod";
import { Request, Response } from "express";
import { prisma } from "../database/prisma";
export class ActivateDeactivateAbilitiesController {
  async handle(req:Request, res:Response) {
  
    const bodySchema = z.object({
      active:  z.boolean(),
    })
    const paramsSchema = z.object({
      abilitiesId:z.string(),
    })
    const {active} =bodySchema.parse(req.body)
    const {abilitiesId} =paramsSchema.parse(req.params)
    await prisma.abilities.update({
      data:{
        active
      },
      where:{
        id:abilitiesId
      }
    }) 
   

    res.status(201).json({message:"Abilities updated"})
  }
}