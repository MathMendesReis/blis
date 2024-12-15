import { Request, Response } from 'express';
export class UserDocumentController {
  async handle(req:Request, res:Response) {
    res.status(201).json({message:"User document created"})
  }
}