"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const timer_1 = require("../middleware/timer");
const timer_2 = require("../middleware/timer");
const timerRouter = express_1.Router();
exports.timerRouter = timerRouter;
timerRouter.get('/:name', timer_1.getTimerController.getTimer);
timerRouter.post('/:name', timer_2.postTimerController.postTimer);
timerRouter.patch('/:name', timer_1.patchTimerController.patchTimer);
//# sourceMappingURL=timerRouter.js.map