import { Router } from 'express'

import { getTimerController, patchTimerController } from '../middleware/timer'
import { postTimerController } from '../middleware/timer';

const timerRouter = Router()

timerRouter.get('/:name', getTimerController.getTimer);
timerRouter.post('/:name', postTimerController.postTimer);
timerRouter.patch('/:name', patchTimerController.patchTimer);
export { timerRouter }