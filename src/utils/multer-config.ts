import multer from 'multer'
import { fileFilter } from './file-filter';
const uploadPath = 'public/uploads';  
const upload = multer({ 
  dest: uploadPath,
  limits: { fileSize:  10 * 1024 * 1024 },
  fileFilter: fileFilter });
export { upload };