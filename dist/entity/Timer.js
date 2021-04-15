"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
let Timer = class Timer {
};
tslib_1.__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    tslib_1.__metadata("design:type", Number)
], Timer.prototype, "id", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ comment: "타이머 이름", nullable: false, unique: true }),
    tslib_1.__metadata("design:type", String)
], Timer.prototype, "name", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ comment: "종료 시간", nullable: false }),
    tslib_1.__metadata("design:type", Date)
], Timer.prototype, "date", void 0);
Timer = tslib_1.__decorate([
    typeorm_1.Entity()
], Timer);
exports.Timer = Timer;
//# sourceMappingURL=Timer.js.map