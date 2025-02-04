import {PrismaClient, courses as PrismaCourse} from "@prisma/client";
import {Courses} from "../../domain/Courses";
import {Course} from "../../domain/Course";

export class PostgresCourses implements Courses {
    constructor(private prisma: PrismaClient) {}

    async nextId(): Promise<number> {
        const result = await this.prisma.$queryRaw<{ nextval: number }[]>`
          SELECT nextval(pg_get_serial_sequence('"courses"', 'id')) as nextval
        `;
        return result[0].nextval;
    }

    async create(course: Course): Promise<number> {
        const createdCourse = await this.prisma.courses.create({
            data: this.toDto(course)
        });
        return createdCourse.id;
    }

    async findById(id: number): Promise<Course | null> {
        const course = await this.prisma.courses.findUnique({where: {id}});
        return course ? this.toEntity(course) : null;
    }

    async update(course: Course): Promise<void> {
        await this.prisma.courses.update({
            where: { id: course.id },
            data: this.toDto(course),
        });
    }

    private toEntity(course: PrismaCourse): Course {
        return new Course(course.id, course.name, course.description, Number(course.price));
    }

    private toDto(course: Course) {
        return {
            id: course.id,
            name: course.name,
            description: course.description,
            price: course.price,
        };
    }
}
