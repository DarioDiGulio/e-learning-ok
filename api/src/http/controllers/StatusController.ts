import { Router, Request, Response } from "express";
import {DBChecker} from "../../modules/common/infrastructure/DBChecker";

export class StatusController {
    public readonly router: Router;
    private dbChecker: DBChecker;

    constructor() {
        this.router = Router();
        this.dbChecker = new DBChecker();
        this.initializeRoutes();
    }

    private initializeRoutes(): void {
        this.router.get("/status", this.getStatus);
    }

    private getStatus = async (req: Request, res: Response) => {
        try {
            const isDBActive = await this.dbChecker.check();
            res.json({
                status: "ok",
                database: isDBActive ? "connected" : "disconnected",
            });
        } catch (error) {
            console.error("Error checking status:", error);
            res.status(500).json({ status: "error", message: "Internal Server Error" });
        }
    };
}
