import { PrismaClient } from "@prisma/client";
import {PostgresUsers} from "../../../../../src/modules/users/infrastructure/persistance/PostgresUsers";
import {User} from "../../../../../src/modules/users/domain/User";

jest.mock("@prisma/client");

describe("Postgres Users", () => {
    it("debe devolver el próximo ID de usuario correctamente", async () => {
        prismaMock.$queryRaw.mockResolvedValue([{ nextval: BigInt(1) }]);

        const nextId = await repository.nextId();

        expect(nextId).toBe(1n);
    });

    const username = "user@name.com";
    const password = "1234";
    const now = new Date();
    const user =  new User(1, username, password, null, now, now);
    let repository: PostgresUsers;

    beforeEach(() => {
        repository = new PostgresUsers(prismaMock);
    });
});


export const prismaMock = {
    users: {
        create: jest.fn(),
    },
    $queryRaw: jest.fn(),
} as unknown as jest.Mocked<PrismaClient>;
