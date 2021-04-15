"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const app_1 = tslib_1.__importDefault(require("./app"));
const http = tslib_1.__importStar(require("http"));
const ConnectionOptions = tslib_1.__importStar(require("./config/ormConfig"));
const env_1 = require("./config/env");
const typeorm_1 = require("typeorm");
const dotenv = tslib_1.__importStar(require("dotenv"));
dotenv.config();
console.log(ConnectionOptions);
typeorm_1.createConnection(ConnectionOptions)
    .then(conn => {
    const port = normalizePort(env_1.webPort);
    app_1.default.set('port', port);
    const server = http.createServer(app_1.default);
    console.log(port);
    server.listen(Number(port), env_1.webHost);
    server.on('listening', onListening);
    function onListening() {
        const addr = server.address();
        if (!addr)
            return;
        const bind = typeof addr === 'string' ? 'pipe ' + addr : addr.port;
        console.log('[@] Complete.');
        console.log('[@] host: ' + addr.address);
        console.log('[@] port: ' + bind);
    }
})
    .catch(e => {
    console.log('[!] Database connection failed');
    console.log('[!] ' + e.sqlMessage);
    console.log('[!] Code: ' + e.code);
});
function normalizePort(val) {
    var port = parseInt(val, 10);
    if (isNaN(port)) {
        // named pipe
        return val;
    }
    if (port >= 0) {
        // port number
        return port;
    }
    return false;
}
//# sourceMappingURL=index.js.map