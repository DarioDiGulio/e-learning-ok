import {PostgresUsers} from "../../../users/infrastructure/persistance/PostgresUsers";
import {InMemoryUsers} from "../../../users/infrastructure/persistance/InMemoryUsers";
import {PrismaClient} from "@prisma/client";
import {Users} from "../../../users/domain/Users";
import {Courses} from "../../../courses/domain/Courses";
import {PostgresCourses} from "../../../courses/infrastructure/persistance/PostgresCourses";
import {InMemoryCourses} from "../../../courses/infrastructure/persistance/InMemoryCourses";

export enum RepositoryType {
    USERS = "USERS",
    COURSES = "COURSES",
}

export const repositories = (prisma: PrismaClient) => ({
    [RepositoryType.USERS]: {
        type: {} as Users,
        postgres: new PostgresUsers(prisma),
        memory: new InMemoryUsers(),
    },
    [RepositoryType.COURSES]: {
        type: {} as Courses,
        postgres: new PostgresCourses(prisma),
        memory: new InMemoryCourses(),
    },
});
