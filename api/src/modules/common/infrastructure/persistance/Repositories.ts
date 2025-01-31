import {PostgresUsers} from "../../../users/infrastructure/persistance/PostgresUsers";
import {InMemoryUsers} from "../../../users/infrastructure/persistance/InMemoryUsers";
import {PrismaClient} from "@prisma/client";
import {Users} from "../../../users/domain/Users";

export enum RepositoryType {
    USERS = "USERS",
}

export const repositories = (prisma: PrismaClient) => ({
    [RepositoryType.USERS]: {
        type: {} as Users,
        postgres: new PostgresUsers(prisma),
        memory: new InMemoryUsers(),
    },
});
