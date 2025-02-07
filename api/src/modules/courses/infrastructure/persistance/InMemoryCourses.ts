import { Courses } from "../../domain/Courses";
import { Course } from "../../domain/Course";

export class InMemoryCourses implements Courses {
    private courses: Course[] = [];
    private nextIdValue: number = 1;

    async nextId(): Promise<number> {
        return this.nextIdValue++;
    }

    async create(course: Course): Promise<number> {
        this.courses.push(course);
        return course.id;
    }

    async findById(id: number): Promise<Course | null> {
        return this.courses.find(course => course.id === id) ?? null;
    }

    async update(course: Course): Promise<void> {
        const index = this.courses.findIndex(c => c.id === course.id);
        if (index !== -1) {
            this.courses[index] = course;
        }
    }
}
