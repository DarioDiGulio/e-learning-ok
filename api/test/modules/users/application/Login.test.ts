import {Users} from "../../../../src/modules/users/domain/Users";
import {Login} from "../../../../src/modules/users/application/Login";
import {InMemoryUsers} from "../../../../src/modules/users/infrastructure/persistance/InMemoryUsers";
import {UUIDGenerator} from "../../../../src/modules/common/infrastructure/UUIDGenerator/UUIDGenerator";
import {FixedUUIDGenerator} from "../../../../src/modules/common/infrastructure/UUIDGenerator/FixedUUIDGenerator";
import {User} from "../../../../src/modules/users/domain/User";

describe("LoginHandler", () => {
    it("debe autenticar correctamente y devolver un sessionToken", async () => {
        usuarioCreado()

        const result = await handler.handle({ username, password });

        expect(result.sessionToken).toBe(uuidGenerator.value);
    });

    it("debe lanzar error si las credenciales son incorrectas", async () => {
        usuarioCreado()

        await expect(handler.handle({ username: "user", password: "wrong" }))
            .rejects.toThrow("Invalid credentials");
    });

    it("debe lanzar un error si el usuario no existe", async () => {
        await expect(handler.handle({ username, password }))
            .rejects.toThrow("Invalid credentials");
    });

    it("debe actualizar el sessionToken del usuario guardado luego de autenticarlo", async () => {
        usuarioCreado()

        await handler.handle({ username, password });

        const user = await users.findByUsername(username);
        expect(user?.getSessionToken()).toBe(uuidGenerator.value);
    });

    function usuarioCreado() {
        users.create(new User(1, username, password, null, new Date(), new Date()));
    }

    let users: Users;
    let uuidGenerator: UUIDGenerator;
    let handler: Login;
    const username = "user";
    const password = "1234";

    beforeEach(() => {
        users = new InMemoryUsers();
        uuidGenerator = new FixedUUIDGenerator();
        handler = new Login(users, uuidGenerator);
    });
});

