import {Users} from "../domain/Users";
import {User} from "../domain/User";

interface CreateUserParams {
    username: string;
    password: string;
}

export class CreateUser {
    constructor(private readonly userRepository: Users) {}

    async handle(request: CreateUserParams): Promise<number> {
        const { username, password } = request;
        this.validate(request);
        const user = await this.createUserBy(username, password);
        return this.userRepository.create(user);
    }

    private validate(request: CreateUserParams) {
        const { username, password } = request;
        if (!username || !password) {
            throw new Error("Username and password are required");
        }
    }

    private async createUserBy(username: string, password: string) {
        const nextId: number = await this.userRepository.nextId();
        return new User(nextId, username, password, null, new Date(), new Date());
    }
}
