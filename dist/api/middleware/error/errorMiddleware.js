"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const errors_1 = tslib_1.__importDefault(require("./errors"));
const ErrorMiddleware = (err, req, res, next) => {
    console.error(err);
    const error = errors_1.default[err.name];
    const name = err.name;
    const description = (error && error.description) || errors_1.default.Unhandled_Error.description;
    const message = err.message || (error && error.message) || errors_1.default.Unhandled_Error.message;
    const code = (error && error.code) || errors_1.default.Unhandled_Error.code;
    res.status(code).json({
        success: false,
        code,
        name,
        message,
        description,
    });
};
exports.default = ErrorMiddleware;
//# sourceMappingURL=errorMiddleware.js.map