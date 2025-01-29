export class User {
    constructor(
        public readonly id: number,
        public readonly username: string,
        public readonly password: string,
        public readonly sessionToken: string | null,
        public readonly createdAt: Date,
        public readonly updatedAt: Date
    ) {}
}