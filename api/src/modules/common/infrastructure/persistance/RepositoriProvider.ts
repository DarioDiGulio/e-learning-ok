import {PrismaClient} from "@prisma/client";
import {repositories, RepositoryType} from "./Repositories";

export class RepositoryProvider {
    private readonly prisma: PrismaClient;
    private readonly useInMemory: boolean;
    private readonly repositories: ReturnType<typeof repositories>

    constructor(useInMemory: boolean = false) {
        this.useInMemory = useInMemory;
        this.prisma = new PrismaClient();
        this.repositories = repositories(this.prisma);
    }

    get<T extends RepositoryType>(type: T): typeof this.repositories[T]["type"]  {
        const backend = this.useInMemory ? "memory" : "postgres";

        if (!this.repositories[type] || !this.repositories[type][backend]) {
            throw new Error(`Repository ${type} not found`);
        }

        return this.repositories[type][backend];
    }

    async disconnect(): Promise<void> {
        await this.prisma.$disconnect();
    }
}
