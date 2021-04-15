import { 
  blobAccessKey,
  blobStorageAccount
 } from './env';

const azure = require('azure-storage');
export const blobService = azure.createBlobService(blobStorageAccount,blobAccessKey);