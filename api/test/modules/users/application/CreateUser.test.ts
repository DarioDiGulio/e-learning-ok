import { Users } from "../../../../src/modules/users/domain/Users";
import { CreateUser } from "../../../../src/modules/users/application/CreateUser";
import { InMemoryUsers } from "../../../../src/modules/users/infrastructure/persistance/InMemoryUsers";

describe("CreateUser", () => {
    it("debe crear un usuario correctamente y devolver su ID", async () => {
        const userId = await handler.handle({ username, password });

        const user = await users.findByUsername(username);
        expect(user).not.toBeNull();
        expect(user?.id).toBe(userId);
        expect(user?.username).toBe(username);
    });

    it("debe lanzar error si no se proporciona username", async () => {
        await expect(handler.handle({ username: "", password }))
            .rejects.toThrow("Username and password are required");
    });

    it("debe lanzar error si no se proporciona password", async () => {
        await expect(handler.handle({ username, password: "" }))
            .rejects.toThrow("Username and password are required");
    });

    let users: Users;
    let handler: CreateUser;
    const username = "user";
    const password = "1234";

    beforeEach(() => {
        users = new InMemoryUsers();
        handler = new CreateUser(users);
    });
});
