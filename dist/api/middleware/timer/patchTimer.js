"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
const entity_1 = require("../../../entity");
const customError_1 = tslib_1.__importDefault(require("../error/customError"));
const patchTimer = (req, res, next) => tslib_1.__awaiter(this, void 0, void 0, function* () {
    const moment = require("moment");
    const repository = typeorm_1.getConnection().getRepository(entity_1.Timer);
    const name = typeof req.params.name !== 'string' ? next(new customError_1.default({ name: 'Wrong_Data' })) : String(req.params.name);
    const date = typeof req.body.date !== 'string' ? next(new customError_1.default({ name: 'Wrong_Data' })) : moment(req.body.date).format('YYYY MM DD HH:mm:ss');
    if (date == 'Invalid date')
        next(new customError_1.default({ name: 'Wrong_Data' })); //날짜 오류
    yield repository.findOne({ where: { name } }).then((data) => tslib_1.__awaiter(this, void 0, void 0, function* () {
        if (data) {
            data.date = date;
            try {
                const timer = yield repository.manager
                    .save(data);
                res.json({ success: true, result: 'OK' }).end(); // 데이터 삽입 구문
            }
            catch (err) {
                if (err instanceof typeorm_1.QueryFailedError) {
                    console.log(err['code']);
                    if (err['code'] === 'ER_NO_DEFAULT_FOR_FIELD')
                        next(new customError_1.default({ name: 'Wrong_Data' })); //필드에 기본값이 없습니다.
                    else if (err['code'] === 'ER_DUP_ENTRY')
                        next(new customError_1.default({ name: 'Exist_Data' })); //중복
                    else
                        next(new customError_1.default({ name: 'Database_Error' })); //모르는 DB에러
                }
                else
                    next(new customError_1.default({ name: 'Database_Error' })); //모르는 DB에러
            }
        }
        else
            next(new customError_1.default({ name: 'Wrong_Data' }));
    }))
        .catch(err => {
        next(new customError_1.default({ name: 'Database_Error' }));
    });
});
exports.patchTimerController = {
    patchTimer,
};
//# sourceMappingURL=patchTimer.js.map