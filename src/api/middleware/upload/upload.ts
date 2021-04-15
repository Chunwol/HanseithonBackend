import {
    NextFunction,
    Request,
    Response,
  } from 'express';
import { 
  blobContainerName
 } from '../../../config/env';
 import { 
  blobService
 } from '../../../config/blobConfig';

import CustomError from '../error/customError';

const moment = require("moment");
const multiparty = require('multiparty');

const upload = async (req: Request, res: Response, next: NextFunction) => {
 const form = new multiparty.Form();
  form.on('part', (part) => {
        if(part.filename){
            const blobname = moment().format('MM-DD HH-mm-ss') + " " + part.filename;
            blobService.createBlockBlobFromStream(blobContainerName, blobname, part, part.byteCount, (error, result, response) => {   
                if(error){
                    res.status(500).send(error);
                }else{
                  res.json({ success: true, result: 'OK' }).end()
                  console.log(result);
                }
            })
        }
        else{
            next(new CustomError({ name: 'Wrong_Data' }));
        }
    });
  form.parse(req);
}

  
  export const uploadController = {
    upload,
  }