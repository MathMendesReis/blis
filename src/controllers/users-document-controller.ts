import { Request, Response } from 'express';
import z from 'zod';
import { prisma } from '../database/prisma';
export class UserDocumentController {
  async handle(req:Request, res:Response) {
  
    const bodySchema = z.object({
      name:  z.string(),
    })
    const {name} =bodySchema.parse(req.body)

    if (req.file) {
      const fileUrl = `http://localhost:3000/uploads/${req.file.filename}`;
      await prisma.userDocuments.create({
        data:{
          name: name,         
          url: fileUrl,        
          userId:req.user?.id as string

        }
      })
    }

    res.status(201).json({message:"User document created"})
  }
}