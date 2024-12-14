import { Request, Response } from "express";
import z from "zod";
import { prisma } from "../database/prisma";
import {hash} from 'bcrypt'


export class CreateUserController {
  async handle(request:Request, response:Response) {
    const bodySchema = z.object({
      name: z.string(),
      birthdate:  z.string(),
      email:  z.string(),
      password:  z.string(),
    })
    const { name, birthdate, email, password } = bodySchema.parse(request.body)
    const userExists = await prisma.user.findMany({
      where:{
        email
      }
    })
    if(userExists.length !== 0){
       response.status(400).json({error: 'User already exists'})
       return
    }
    const hashPassword = await hash(password,8)

    await prisma.user.create({
      data: {
        name,
        birthdate: new Date(birthdate),
        email,
        password:hashPassword
      }
    })
  
    response.status(201).json()
  }
}