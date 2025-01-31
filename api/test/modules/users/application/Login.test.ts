import {Users} from "../../../../src/modules/users/domain/Users";
import {Login} from "../../../../src/modules/users/application/Login";
import {UUIDGenerator} from "../../../../src/modules/common/infrastructure/UUIDGenerator/UUIDGenerator";
import {FixedUUIDGenerator} from "../../../../src/modules/common/infrastructure/UUIDGenerator/FixedUUIDGenerator";
import {User} from "../../../../src/modules/users/domain/User";
import {RepositoryProvider} from "../../../../src/modules/common/infrastructure/persistance/RepositoriProvider";
import {RepositoryType} from "../../../../src/modules/common/infrastructure/persistance/Repositories";

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

    let uuidGenerator: UUIDGenerator;
    let repositories: RepositoryProvider;
    let users: Users;
    let handler: Login;
    const username = "user";
    const password = "1234";

    beforeEach(() => {
        const useInMemory = true;
        repositories = new RepositoryProvider(useInMemory);
        users = repositories.get(RepositoryType.USERS);
        uuidGenerator = new FixedUUIDGenerator();
        handler = new Login(repositories, uuidGenerator);
    });
});

