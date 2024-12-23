import { Request, Response } from "express";
import z from "zod";
import {hash} from 'bcrypt'
import { prisma } from "../../../database/prisma";
import { AppError } from "../../../utils/app-error";


export class CreateUserUsecase {
  public execute = async ({name, birthdate, email, password}: {name: string, birthdate: string, email: string, password: string}) => {

    const userExists = await prisma.user.findMany({
      where:{
        email
      }
    })
    if(userExists.length !== 0){
       throw new AppError('User already exists',401)
    }
    const hashPassword = await hash(password,8)

   return await prisma.user.create({
      data: {
        name,
        birthdate: new Date(birthdate),
        email,
        password:hashPassword
      }
    })
  }
}