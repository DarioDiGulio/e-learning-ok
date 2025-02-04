import {PrismaClient} from "@prisma/client";
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
        const createdCourse = await this.prisma.course.create({
            data: {
                id: course.id,
                name: course.name,
                description: course.description,
                price: course.price,
            },
        });
        return createdCourse.id;
    }

    async findById(id: number): Promise<Course | null> {
        const course = await this.prisma.course.findUnique({where: {id}});
        return course ? new Course(course.id, course.name, course.description, Number(course.price)) : null;
    }
}
