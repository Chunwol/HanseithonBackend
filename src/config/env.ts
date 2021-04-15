import * as dotenv from 'dotenv';
dotenv.config();

export const webHost : string = process.env.WEB_HOST! || '0.0.0.0';
export const webPort : string = process.env.WEB_PORT! || '3000';

export const dbHost : string = process.env.DB_HOST! || 'chunwol.xyz';
export const dbPort : number = Number(process.env.DB_PORT)! || 3306;

export const dbDatabase : string = process.env.DB_NAME! || 'Mysql';

export const dbUser : string = process.env.DB_USER! || 'hansei';
export const dbPassword : string = process.env.DB_PW! || 'hansei';

export const blobAccessKey : string = process.env.BLOB_ACCESSKEY! || 'G+6cFej8GpU4Ff69RTNDMWOpqMJ6wq7qcq7CciYpXDhA5LZ9R3KUAa90kWhmFaa5qBzoOU1/jK+Vhnhg2+N/+Q==';
export const blobStorageAccount : string = process.env.BLOB_STORAGEACCOUNT! || 'chunwol';
export const blobContainerName : string = process.env.BLOB_CONTAINERNAME! || 'fileupload';
