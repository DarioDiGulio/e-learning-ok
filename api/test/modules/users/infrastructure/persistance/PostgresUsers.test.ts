import { PrismaClient } from "@prisma/client";
import {PostgresUsers} from "../../../../../src/modules/users/infrastructure/persistance/PostgresUsers";

export const prismaMock = {
    $queryRaw: jest.fn(),
} as unknown as jest.Mocked<PrismaClient>;

jest.mock("@prisma/client");

describe("UserRepository", () => {
    it("debe devolver el próximo ID de usuario correctamente", async () => {
        prismaMock.$queryRaw.mockResolvedValue([{ nextval: BigInt(1) }]);

        const nextId = await repository.nextId();

        expect(nextId).toBe(1n);
    });

    let repository: PostgresUsers;

    beforeEach(() => {
        repository = new PostgresUsers();
        repository["prisma"] = prismaMock;
    });
});

