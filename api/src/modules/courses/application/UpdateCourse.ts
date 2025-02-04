
import { Course } from "../domain/Course";
import {RepositoryProvider} from "../../common/infrastructure/persistance/RepositoriProvider";
import {RepositoryType} from "../../common/infrastructure/persistance/Repositories";

interface UpdateCourseParams {
    id: number;
    name: string;
    description: string;
    price: number;
}

export class UpdateCourse {
    constructor(private readonly provider: RepositoryProvider) {}

    async handle(params: UpdateCourseParams): Promise<void> {
        const { id, name, description, price } = params;

        if (!id || !name || !description || price <= 0) {
            throw new Error("Invalid course data");
        }

        const courseRepository = this.provider.get(RepositoryType.COURSES);
        const existingCourse = await courseRepository.findById(id);

        if (!existingCourse) {
            throw new Error("Course not found");
        }

        const updatedCourse = new Course(id, name, description, price);
        await courseRepository.update(updatedCourse);
    }
}
