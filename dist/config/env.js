"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const dotenv = tslib_1.__importStar(require("dotenv"));
dotenv.config();
exports.webHost = process.env.WEB_HOST || '0.0.0.0';
exports.webPort = process.env.WEB_PORT || '3000';
exports.dbHost = process.env.DB_HOST || 'chunwol.xyz';
exports.dbPort = Number(process.env.DB_PORT) || 3306;
exports.dbDatabase = process.env.DB_NAME || 'Mysql';
exports.dbUser = process.env.DB_USER || 'hansei';
exports.dbPassword = process.env.DB_PW || 'hansei';
exports.blobAccessKey = process.env.BLOB_ACCESSKEY || 'G+6cFej8GpU4Ff69RTNDMWOpqMJ6wq7qcq7CciYpXDhA5LZ9R3KUAa90kWhmFaa5qBzoOU1/jK+Vhnhg2+N/+Q==';
exports.blobStorageAccount = process.env.BLOB_STORAGEACCOUNT || 'chunwol';
exports.blobContainerName = process.env.BLOB_CONTAINERNAME || 'fileupload';
//# sourceMappingURL=env.js.map