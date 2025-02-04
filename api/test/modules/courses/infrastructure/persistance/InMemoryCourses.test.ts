import {Courses} from "../../../../../src/modules/courses/domain/Courses";
import {InMemoryCourses} from "../../../../../src/modules/courses/infrastructure/persistance/InMemoryCourses";
import {Course} from "../../../../../src/modules/courses/domain/Course";

describe("InMemoryCourses", () => {
    it("debe generar un nuevo ID incremental", async () => {
        const id1 = await courses.nextId();
        const id2 = await courses.nextId();
        expect(id2).toBeGreaterThan(id1);
    });

    it("debe guardar un curso en memoria", async () => {
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

    let courses: Courses;

    beforeEach(() => {
        courses = new InMemoryCourses();
    });
});
