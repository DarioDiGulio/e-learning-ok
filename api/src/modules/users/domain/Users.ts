import {User} from "./User";

export interface Users {
    nextId(): Promise<number>;
    create(user: User): Promise<number>;
}