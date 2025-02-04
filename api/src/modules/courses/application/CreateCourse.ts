import {Course} from "../domain/Course";
import {RepositoryProvider} from "../../common/infrastructure/persistance/RepositoriProvider";
import {RepositoryType} from "../../common/infrastructure/persistance/Repositories";

interface CreateCourseParams {
    name: string;
    description: string;
    price: number;
}

export class CreateCourse {
    constructor(private readonly provider: RepositoryProvider) {}


    async handle(params: CreateCourseParams): Promise<number> {
        const {name, description, price} = params;

        if (!name || !description || price <= 0) {
            throw new Error("Invalid course data");
        }

        const courses = this.provider.get(RepositoryType.COURSES)
        const nextId: number = await courses.nextId();
        const course = new Course(nextId, name, description, price);
        await courses.create(course);
        return nextId;
    }
}
