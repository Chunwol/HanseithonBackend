import {
    NextFunction,
    Request,
    Response,
  } from 'express';
import {
  getConnection,
  QueryFailedError,
} from 'typeorm';
import {
  plainToClassFromExist,
} from 'class-transformer';
import {
  Timer
} from '../../../entity';
import CustomError from '../error/customError';

const postTimer = async (req: Request, res: Response, next: NextFunction) => {
  const moment = require("moment");
  const repository = getConnection().getRepository(Timer)
  let data = {
    name : typeof req.params.name !== 'string' ? next(new CustomError({ name: 'Wrong_Data' })) : String(req.params.name),
    date : typeof req.body.date !== 'string' ? next(new CustomError({ name: 'Wrong_Data' })) : moment(req.body.date).format('YYYY MM DD HH:mm:ss')
  }//넘어온 데이터 형식 오류
  if (data.date == 'Invalid date'){
    next(new CustomError({ name: 'Wrong_Data' })) //날짜 오류
  }
  let timer = new Timer()
  timer = plainToClassFromExist(timer, data)

  return repository.manager
    .save(timer)
    .then(timer => {
      res.json({ success: true, result: 'OK' }).end() // 데이터 삽입 구문
    }).catch(err => {
      if (err instanceof QueryFailedError) {
        console.log(err['code']);
        if (err['code'] === 'ER_NO_DEFAULT_FOR_FIELD') {
          next(new CustomError({ name: 'Wrong_Data' })); //필드에 기본값이 없습니다.
        }else if (err['code'] === 'ER_DUP_ENTRY') {
          next(new CustomError({ name: 'Exist_Data' })); //중복
        }else{
          next(new CustomError({ name: 'Database_Error' })); //모르는 DB에러
        }
      } else {
        next(new CustomError({ name: 'Database_Error' })); //모르는 DB에러
      }
    })
}
  
export const postTimerController = {
  postTimer,
}