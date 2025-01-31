import {Users} from "../../domain/Users";
import {User} from "../../domain/User";
import { PrismaClient, users as PrismaUser } from "@prisma/client";

export class PostgresUsers implements Users {
    constructor(private prisma: PrismaClient) {}

    async nextId(): Promise<number> {
        const result = await this.prisma.$queryRaw<{ nextval: number }[]>`
          SELECT nextval(pg_get_serial_sequence('"users"', 'id')) as nextval
        `;
        return result[0].nextval;
    }


    async create(user: User): Promise<number> {
        await this.prisma.users.create({ data: this.toDto(user) });
        return user.id;
    }


    async findByUsername(username: string): Promise<User | null> {
        const user = await this.prisma.users.findUnique({
            where: { username },
        });
        if (!user) return null;
        return this.toEntity(user);
    }

    async updateSessionToken(userId: number, sessionToken: string): Promise<void> {
        this.prisma.users.update({
            where: { id: userId },
            data: { sessionToken },
        });
    }

    private toEntity(user: PrismaUser) {
        return new User(
            Number(user.id),
            user.username,
            user.password,
            user.sessionToken,
            user.createdAt,
            user.updatedAt
        )
    }

    private toDto(user : User): PrismaUser {
        return {
            id: BigInt(user.id),
            username: user.username,
            password: user.password,
            sessionToken: user.sessionToken,
            createdAt: user.createdAt,
            updatedAt: user.updatedAt
        }
    }
}