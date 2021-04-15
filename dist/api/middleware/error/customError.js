"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const errors_1 = tslib_1.__importDefault(require("./errors"));
class CustomError {
    constructor({ name, message }) {
        const customError = new Error();
        customError.name = name;
        customError.message = message || errors_1.default[name].message;
        return customError;
    }
}
exports.default = CustomError;
//# sourceMappingURL=customError.js.map