import { Request, Response, NextFunction, Router } from "express";

type HandlerFunction<T> = (params: T) => Promise<any>;

export class Dispatcher {
    static register<T>(
        router: Router,
        method: "get" | "post" | "put" | "delete",
        path: string,
        handler: HandlerFunction<T>
    ): void {
        router[method](path, async (req: Request, res: Response, next: NextFunction) => {
            try {
                const params = Dispatcher.extractParams<T>(req);
                const result = await handler(params);
                res.json(result);
            } catch (error) {
                console.error(error);
                const errorMessage = error instanceof Error ? error.message : "An unexpected error occurred";

                res.status(400).json({ error: errorMessage });
            }
        });
    }

    private static extractParams<T>(req: Request): T {
        return { ...req.body, ...req.params, ...req.query } as T; // ✅ Extrae automáticamente todos los parámetros
    }
}
