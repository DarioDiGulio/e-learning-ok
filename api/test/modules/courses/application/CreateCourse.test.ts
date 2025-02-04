import {CreateCourse} from "../../../../src/modules/courses/application/CreateCourse";
import {RepositoryProvider} from "../../../../src/modules/common/infrastructure/persistance/RepositoriProvider";
import {RepositoryType} from "../../../../src/modules/common/infrastructure/persistance/Repositories";

describe("CreateCourse", () => {
    it("debe crear un curso correctamente", async () => {
        const courseId = await createCourse.handle({
            name: "Curso de TypeScript",
            description: "Aprende TypeScript desde cero",
            price: 99.99,
        });

        const course = await repositories.get(RepositoryType.COURSES).findById(courseId);
        expect(course).not.toBeNull();
        expect(course?.id).toBe(courseId);
    });

    it("debe lanzar error si falta información", async () => {
        await expect(createCourse.handle({name: "", description: "Aprende TS", price: 99.99}))
            .rejects.toThrow("Invalid course data");

        await expect(createCourse.handle({name: "Curso", description: "", price: 99.99}))
            .rejects.toThrow("Invalid course data");

        await expect(createCourse.handle({name: "Curso", description: "Aprende TS", price: 0}))
            .rejects.toThrow("Invalid course data");
    });

    let repositories: RepositoryProvider;
    let createCourse: CreateCourse;

    beforeEach(() => {
        repositories = new RepositoryProvider(true);
        createCourse = new CreateCourse(repositories);
    });
});
