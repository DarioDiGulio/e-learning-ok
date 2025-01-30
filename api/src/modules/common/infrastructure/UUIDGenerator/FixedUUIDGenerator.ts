import {UUIDGenerator} from "./UUIDGenerator";

export class FixedUUIDGenerator implements UUIDGenerator {
    value = "fixed-uuid";

    public generateUUID(): string {
        return this.value;
    }
}