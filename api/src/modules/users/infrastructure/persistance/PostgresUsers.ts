import {Users} from "../../domain/Users";
import {User} from "../../domain/User";
import {PrismaClient} from "@prisma/client";

export class PostgresUsers implements Users {
    private prisma: PrismaClient;

    constructor() {
        this.prisma = new PrismaClient();
    }

    async nextId(): Promise<number> {
        const result = await this.prisma.$queryRaw<{ nextval: number }[]>`
          SELECT nextval(pg_get_serial_sequence('"users"', 'id')) as nextval
        `;
        return result[0].nextval;
    }


    async create(user: User): Promise<number> {
        await this.prisma.users.create({
            data: {
                id: user.id,
                username: user.username,
                password: user.password,
                sessionToken: user.sessionToken,
                createdAt: user.createdAt,
                updatedAt: user.updatedAt
            },
        });
        return user.id;
    }
}