"use strict";
const env_1 = require("./env");
const connectionOptions = {
    "type": "mysql",
    "host": env_1.dbHost,
    "port": env_1.dbPort,
    "username": env_1.dbUser,
    "password": env_1.dbPassword,
    "database": env_1.dbDatabase,
    "charset": "UTF8MB4_UNICODE_CI",
    "synchronize": true,
    "logging": false,
    "entities": [
        "src/entity/*.js"
    ]
};
module.exports = connectionOptions;
//# sourceMappingURL=ormConfig.js.map