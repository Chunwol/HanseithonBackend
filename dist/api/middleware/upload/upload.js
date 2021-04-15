"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const env_1 = require("../../../config/env");
const blobConfig_1 = require("../../../config/blobConfig");
const customError_1 = tslib_1.__importDefault(require("../error/customError"));
const moment = require("moment");
const multiparty = require('multiparty');
const upload = (req, res, next) => tslib_1.__awaiter(this, void 0, void 0, function* () {
    const form = new multiparty.Form();
    form.on('part', (part) => {
        if (part.filename) {
            const blobname = moment().format('MM-DD HH-mm-ss') + " " + part.filename;
            blobConfig_1.blobService.createBlockBlobFromStream(env_1.blobContainerName, blobname, part, part.byteCount, (error, result, response) => {
                if (error) {
                    res.status(500).send(error);
                }
                else {
                    res.json({ success: true, result: 'OK' }).end();
                    console.log(result);
                }
            });
        }
        else {
            next(new customError_1.default({ name: 'Wrong_Data' }));
        }
    });
    form.parse(req);
});
exports.uploadController = {
    upload,
};
//# sourceMappingURL=upload.js.map