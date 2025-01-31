import {RandomUUIDGenerator} from "../../common/infrastructure/UUIDGenerator/RandomUUIDGenerator";
import {User} from "../domain/User";
import {RepositoryProvider} from "../../common/infrastructure/persistance/RepositoriProvider";
import {RepositoryType} from "../../common/infrastructure/persistance/Repositories";


interface LoginParams {
    username: string;
    password: string;
}

export class Login {
    constructor(private provider: RepositoryProvider, private uuidGenerator: RandomUUIDGenerator) {}

    async handle(params: LoginParams): Promise<{ sessionToken: string }> {
        const users = this.provider.get(RepositoryType.USERS);
        const user = await users.findByUsername(params.username);
        this.validate(params.password, user);
        const sessionToken = this.uuidGenerator.generateUUID();
        await users.updateSessionToken(user!!.id, sessionToken);
        return { sessionToken };
    }

    private validate(password: string, user: User | null) {
        if (!user) {
            throw new Error("Invalid credentials");
        }
        if (user.password !== password) {
            throw new Error("Invalid credentials");
        }
    }
}
