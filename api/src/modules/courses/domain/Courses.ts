import { Course } from "./Course";

export interface Courses {
    nextId(): Promise<number>;
    create(course: Course): Promise<number>;
    findById(id: number): Promise<Course | null>;
}
