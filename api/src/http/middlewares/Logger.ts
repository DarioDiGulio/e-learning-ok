import { Request, Response, NextFunction } from "express";

export class LoggerMiddleware {
    static handle(req: Request, res: Response, next: NextFunction): void {
        const timestamp = new Date().toISOString();
        const start = process.hrtime();
        res.on("finish", () => {
            const [seconds, nanoseconds] = process.hrtime(start);
            const durationMs = (seconds * 1000 + nanoseconds / 1e6).toFixed(2);
            console.log(`[${timestamp}] ${req.method} ${req.url}: ${res.statusCode} - ${durationMs}ms`);
        });

        next();
    }
}
