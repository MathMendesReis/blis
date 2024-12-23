import { Request, Response } from "express";
import z from "zod";
import { prisma } from "../../../database/prisma";
export class DeleteAbilitiesUseCase {
  public execute = async ({userId,abilitiesId}:{userId:string,abilitiesId:string[]}) => {
    await prisma.usersAbilities.deleteMany({
      where:{
        userId:userId,
        abilityId:{
          in:abilitiesId
        }
      }
    })
  }
}

