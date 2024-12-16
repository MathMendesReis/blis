import express, { Request, Response, NextFunction } from 'express';
import multer, { FileFilterCallback } from 'multer';

const fileFilter = (req: Request, file:any, cb: FileFilterCallback) => {
  // Aceitar apenas arquivos com as extensões .jpg, .jpeg, .png, .gif
  if (file.mimetype.startsWith('image/')) {
    cb(null, true);  // Aceita o arquivo
  } else {
    cb(new Error('Somente imagens são permitidas'), false);  // Rejeita o arquivo
  }
};

export { fileFilter };