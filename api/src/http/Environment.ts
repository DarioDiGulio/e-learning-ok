import dotenv from "dotenv";

dotenv.config();

export class Environment {
    static getOrThrow(param: string): string {
        const value = process.env[param];
        if (!value) {
            throw new Error(`Environment variable ${param} is required but not set.`);
        }
        return value;
    }

    static get(param: string): string | undefined {
        return process.env[param];
    }
}
