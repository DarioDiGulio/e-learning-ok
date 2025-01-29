import { Router, Request, Response } from "express";

export class StatusController {
    public readonly router: Router;

    constructor() {
        this.router = Router();
        this.initializeRoutes();
    }

    private initializeRoutes(): void {
        this.router.get("/status", this.getStatus);
    }

    private getStatus(req: Request, res: Response): void {
        res.json({ status: "ok", message: "API is running" });
    }
}
