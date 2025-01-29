import { Request, Response, NextFunction, Router } from "express";

type HandlerFunction<T> = (params: T) => Promise<any>;

export class Dispatcher {
    static register<T>(
        router: Router,
        method: "get" | "post" | "put" | "delete",
        path: string,
        handler: HandlerFunction<T>,
        transform: (req: Request) => T
    ): void {
        router[method](path, async (req: Request, res: Response, next: NextFunction) => {
            try {
                const params = transform(req); // Transforma el request en los parámetros
                const result = await handler(params); // Llama al handler con los parámetros
                res.json(result); // Devuelve el resultado como JSON
            } catch (error) {
                console.error(error);
                next(error); // Maneja errores automáticamente
            }
        });
    }
}
