import {PrismaClient} from "@prisma/client";
import {Courses} from "../../../../../src/modules/courses/domain/Courses";
import {PostgresCourses} from "../../../../../src/modules/courses/infrastructure/persistance/PostgresCourses";
import {Course} from "../../../../../src/modules/courses/domain/Course";

describe("PostgresCourses", () => {
    let prisma: PrismaClient;
    let courses: Courses;

    beforeAll(async () => {
        prisma = new PrismaClient();
        courses = new PostgresCourses(prisma);
        await prisma.course.deleteMany(); // Limpiar la tabla antes de ejecutar los tests
    });

    afterAll(async () => {
        await prisma.$disconnect();
    });

    it("debe generar un nuevo ID incremental", async () => {
        const id1 = await courses.nextId();
        const id2 = await courses.nextId();
        expect(id2).toBeGreaterThan(id1);
    });

    it("debe guardar un curso en la base de datos", async () => {
        const course = new Course(await courses.nextId(), "Curso de TypeScript", "Aprende TS desde cero", 99.99);

        const id = await courses.create(course);

        const savedCourse = await courses.findById(id);
        expect(savedCourse).not.toBeNull();
        expect(savedCourse?.id).toBe(id);
        expect(savedCourse?.name).toBe(course.name);
    });

    it("debe devolver null si un curso no existe", async () => {
        const course = await courses.findById(99999);
        expect(course).toBeNull();
    });
});
