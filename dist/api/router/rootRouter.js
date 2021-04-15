"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_1 = require("../controller");
const rootRouter = express_1.Router();
exports.rootRouter = rootRouter;
rootRouter.use('/timer', controller_1.timerRouter);
rootRouter.use('/upload', controller_1.uploadRouter);
//# sourceMappingURL=rootRouter.js.map