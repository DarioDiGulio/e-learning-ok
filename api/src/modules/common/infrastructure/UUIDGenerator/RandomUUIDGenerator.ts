import {v4 as uuidv4} from 'uuid';
import {UUIDGenerator} from "./UUIDGenerator";

export class RandomUUIDGenerator implements UUIDGenerator {
    value: string;

    constructor() {
        this.value = this.generateUUID();
    }

    generateUUID(): string {
        return uuidv4();
    }
}