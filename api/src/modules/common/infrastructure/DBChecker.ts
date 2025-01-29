import { PrismaClient } from "@prisma/client";

export class DBChecker {
    private prisma: PrismaClient;

    constructor() {
        this.prisma = new PrismaClient();
    }

    async check(): Promise<boolean> {
        try {
            await this.prisma.$queryRaw`SELECT 1`;
            return true;
        } catch (error) {
            console.error("Database connection failed:", error);
            return false;
        }
    }
}
