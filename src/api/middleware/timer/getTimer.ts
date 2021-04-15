import {
    NextFunction,
    Request,
    Response,
  } from 'express';
  import {
    getRepository
  } from 'typeorm';
  import {
    Timer
  } from '../../../entity';
import CustomError from '../error/customError';

const getTimer = async (req: Request, res: Response, next: NextFunction) => {
    const name = typeof req.params.name !== 'string' ? next(new CustomError({ name: 'Wrong_Data' })) : String(req.params.name);
    await getRepository(Timer).find({where: {name}}).then(data => {
      if (!(data.length == 0))
        res.json({ success: true, data }).end()
      else
        next(new CustomError({ name: 'Wrong_Data' }));
    })
    .catch(err => {
      next(new CustomError({ name: 'Database_Error' }));
    })
  }
  
  export const getTimerController = {
    getTimer,
  }