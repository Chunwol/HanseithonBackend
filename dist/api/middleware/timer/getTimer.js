"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
const entity_1 = require("../../../entity");
const customError_1 = tslib_1.__importDefault(require("../error/customError"));
const getTimer = (req, res, next) => tslib_1.__awaiter(this, void 0, void 0, function* () {
    const name = typeof req.params.name !== 'string' ? next(new customError_1.default({ name: 'Wrong_Data' })) : String(req.params.name);
    yield typeorm_1.getRepository(entity_1.Timer).find({ where: { name } }).then(data => {
        if (!(data.length == 0))
            res.json({ success: true, data }).end();
        else
            next(new customError_1.default({ name: 'Wrong_Data' }));
    })
        .catch(err => {
        next(new customError_1.default({ name: 'Database_Error' }));
    });
});
exports.getTimerController = {
    getTimer,
};
//# sourceMappingURL=getTimer.js.map