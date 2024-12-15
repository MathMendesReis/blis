import { Request, Response } from 'express'
import z from 'zod'
import { prisma } from '../database/prisma'
import { AppError } from '../utils/app-error'
import { compare } from 'bcrypt'
import { sign } from 'jsonwebtoken'
import { authConfig } from '../configs/auths-config'
export class SessionController {
  async handle(request:Request, response:Response) {
    const bodySchema = z.object({
      email:  z.string(),
      password:  z.string(),
    })
    const { email, password } = bodySchema.parse(request.body)
    const user = await prisma.user.findFirst({
      where:{
        email
      }
    })
    if(!user){
       throw new AppError('User not found',401)
    }
    const passwordMatch = await compare(password,user.password)
    if(!passwordMatch){
       throw new AppError('User not found',401)
    }
    const {expiresIn,secret}  = authConfig.jwt
    const token = sign({role:user.email},secret,{
      subject:user.id,
      expiresIn
    })
    response.status(200).json({token})
  }
}