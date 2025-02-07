import express, {Express} from "express";
import http from "http";
import {StatusController} from "./controllers/StatusController";
import {LoggerMiddleware} from "./middlewares/Logger";
import {UsersController} from "./controllers/UsersController";
import {BigIntMiddleware} from "./middlewares/BigIntMiddleware";
import {RandomUUIDGenerator} from "../modules/common/infrastructure/UUIDGenerator/RandomUUIDGenerator";
import {RepositoryProvider} from "../modules/common/infrastructure/persistance/RepositoriProvider";

export class Application {
    private httpServer: http.Server | null = null;
    private readonly app: Express;
    private readonly port: number;

    constructor(app: Express, port: string) {
        this.app = app;
        this.port = +port;
        this.init();
    }

    private init() {
        this.registerMiddlewares()
        this.registerControllers()
    }

    start(): void {
        if (this.httpServer) {
            console.log("Server is already running.");
            return;
        }
        this.httpServer = this.app.listen(this.port, () => {
            console.log(`Server running on port ${this.port}`);
        });
    }

    private registerMiddlewares(): void {
        this.app.use(express.json());
        this.app.use(BigIntMiddleware);
        this.app.use(LoggerMiddleware.handle);
    }

    private registerControllers(): void {
        this.app.use(new StatusController().router)
        const repositoryProvider = new RepositoryProvider();
        const uuidGenerator = new RandomUUIDGenerator();
        const userController = new UsersController(repositoryProvider, uuidGenerator);
        this.app.use(userController.router);
    }

    stop(): void {
        if (!this.httpServer) {
            console.log("Server is not running.");
            return;
        }
        this.httpServer.close(() => {
            console.log("Server stopped.");
            this.httpServer = null;
        });
    }

    getServer(): Express {
        return this.app;
    }
}