import { Router } from 'express'
import { timerRouter, uploadRouter } from '../controller'

const rootRouter = Router()

rootRouter.use('/timer', timerRouter)
rootRouter.use('/upload', uploadRouter)

export { rootRouter }