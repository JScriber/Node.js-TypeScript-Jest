"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
class Server {
    /** Constructor. */
    constructor(port) {
        this.port = port;
    }
    /** Initiate the server. */
    start() {
        const app = express_1.default();
        app.get('/', (req, res) => {
            res.send('Hello everyone.');
        });
        app.listen(this.port);
    }
    getPort() {
        return this.port;
    }
}
exports.default = Server;
