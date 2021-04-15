"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const upload_1 = require("../middleware/upload");
const multer = require("multer");
const uploadRouter = express_1.Router();
exports.uploadRouter = uploadRouter;
const cors = require('cors');
uploadRouter.use(cors());
uploadRouter.post('/', upload_1.uploadController.upload);
//# sourceMappingURL=uploadRouter.js.map