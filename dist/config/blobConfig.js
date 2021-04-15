"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const env_1 = require("./env");
const azure = require('azure-storage');
exports.blobService = azure.createBlobService(env_1.blobStorageAccount, env_1.blobAccessKey);
//# sourceMappingURL=blobConfig.js.map