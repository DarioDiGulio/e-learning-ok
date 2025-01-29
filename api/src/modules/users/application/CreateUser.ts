import {Users} from "../domain/Users";
import {User} from "../domain/User";

interface CreateUserParams {
    username: string;
    password: string;
}

export class CreateUser {
    constructor(private readonly userRepository: Users) {}

    async handle(params: CreateUserParams): Promise<number> {
        const { username, password } = params;

        if (!username || !password) {
            throw new Error("Username and password are required");
        }

        const nextId: number = await this.userRepository.nextId();
        const user = new User(nextId, username, password, null, new Date(), new Date());
        return this.userRepository.create(user);
    }
}
