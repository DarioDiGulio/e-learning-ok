import {User} from "../domain/User";
import {RepositoryProvider} from "../../common/infrastructure/persistance/RepositoriProvider";
import {RepositoryType} from "../../common/infrastructure/persistance/Repositories";

interface CreateUserParams {
    username: string;
    password: string;
}

export class CreateUser {
    constructor(private readonly provider: RepositoryProvider) {}

    async handle(request: CreateUserParams): Promise<number> {
        const { username, password } = request;
        this.validate(request);
        const user = await this.createUserBy(username, password);
        return this.provider.get(RepositoryType.USERS).create(user);
    }

    private validate(request: CreateUserParams) {
        const { username, password } = request;
        if (!username || !password) {
            throw new Error("Username and password are required");
        }
    }

    private async createUserBy(username: string, password: string) {
        const nextId: number = await this.provider.get(RepositoryType.USERS).nextId();
        return new User(nextId, username, password, null, new Date(), new Date());
    }
}