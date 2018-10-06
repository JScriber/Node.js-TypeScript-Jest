import { Request, Response } from "express";
import express from "express";

export default class Server {

    private readonly port: number;

    /** Constructor. */
    constructor(port: number) {
        this.port = port;
    }

    /** Initiate the server. */
    start(): void {
        const app = express();

        app.get('/', (req: Request, res: Response) => {
            res.send('Hello everyone.');
        });

        app.listen(this.port);
    }

    getPort(): number {
        return this.port;
    }
}
