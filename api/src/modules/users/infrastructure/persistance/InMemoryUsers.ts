import { User } from "../../domain/User";
import {Users} from "../../domain/Users";

export class InMemoryUsers implements Users {
    private users: User[] = [];
    private nextIdValue: number = 0;

    nextId(): Promise<number> {
        return Promise.resolve(this.nextIdValue++);
    }

    create(user: User): Promise<number> {
        this.users.push(user);
        return Promise.resolve(user.id);
    }

    findByUsername(username: string): Promise<User | null> {
        const user = this.users.find((user) => user.username === username);
        return Promise.resolve(user || null);
    }

    updateSessionToken(userId: number, sessionToken: string): Promise<void> {
        const user = this.users.find((user) => user.id === userId);
        if (!user) {
            throw new Error(`User with id ${userId} not found`);
        }
        user.updateSessionToken(sessionToken);
        return Promise.resolve();
    }

}