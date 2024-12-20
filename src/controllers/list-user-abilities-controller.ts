import { Request, Response } from "express";
import z from "zod";
import { prisma } from "../database/prisma";
export class ListUserAbilitiesController {
  async handle(req:Request, res:Response) {
  
    const response = await prisma.user.findFirst({
      where:{
        id:req.user?.id as string
      },
      select:{
        id:true,
        name:true,
        email:true,
        birthdate:true,
        UsersAbilities:{
          select:{
            yearsExperience:true,
            ability:true,
          },
          orderBy:{
            created_at:"desc"
          }
        }
      }
    })


    res.status(200).json({response})
  } 
}

