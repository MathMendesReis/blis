import { Request, Response } from 'express';
import z from 'zod';
import { prisma } from '../database/prisma';
import { AppError } from '../utils/app-error';
export class UserDocumentController {
  async handle(req:Request, res:Response) {
  
    const bodySchema = z.object({
      name:  z.string(),
    })
    const {name} =bodySchema.parse(req.body)

    const documentExists = await prisma.userDocuments.findFirst({
      where:{
        name:name,
        userId:req.user?.id as string
      }
    })

    if(documentExists){
      throw new AppError('Document already exists',400)
    }

    if (!req.file) {
      throw new AppError('File not found',400)
    }
    const fileUrl = `http://localhost:3000/uploads/${req.file.filename}`;
    const response = await prisma.userDocuments.create({
      data:{
        name: name,         
        url: fileUrl,        
        userId:req.user?.id as string

      }
    })
    res.status(201).json({message:response})

  }
}