import { Router } from 'express'

import { uploadController } from '../middleware/upload';

const multer = require("multer");


const uploadRouter = Router()
const cors = require('cors');
uploadRouter.use(cors());
uploadRouter.post('/', uploadController.upload);

export { uploadRouter }