import { Request, Response, NextFunction } from "express";

export const BigIntMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const originalJson = res.json;

    res.json = function (body: any) {
        const replacer = (key: string, value: any) => (typeof value === "bigint" ? value.toString() : value);
        return originalJson.call(this, JSON.parse(JSON.stringify(body, replacer)));
    };

    next();
};
