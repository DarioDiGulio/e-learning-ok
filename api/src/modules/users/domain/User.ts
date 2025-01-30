export class User {
    constructor(
        public readonly id: number,
        public readonly username: string,
        public readonly password: string,
        public sessionToken: string | null,
        public readonly createdAt: Date,
        public readonly updatedAt: Date
    ) {}

    getSessionToken(): string | null {
        return this.sessionToken;
    }

    updateSessionToken(sessionToken: string): void {
        this.sessionToken = sessionToken;
    }
}