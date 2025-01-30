import {User} from "./User";

export interface Users {
    nextId(): Promise<number>;
    create(user: User): Promise<number>;
    findByUsername(username: string): Promise<User | null>;
    updateSessionToken(userId: number, sessionToken: string): Promise<void>;
}