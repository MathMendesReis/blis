import { Request, Response } from "express";
import z from "zod";
import { prisma } from "../database/prisma";
export class ListAbilitiesController {
  async handle(req:Request, res:Response) {
    const response = await prisma.abilities.findMany({})
    res.status(200).json({response})
  } 
}

