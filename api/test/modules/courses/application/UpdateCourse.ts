import {UpdateCourse} from "../../../../src/modules/courses/application/UpdateCourse";
import {Course} from "../../../../src/modules/courses/domain/Course";
import {RepositoryType} from "../../../../src/modules/common/infrastructure/persistance/Repositories";
import {RepositoryProvider} from "../../../../src/modules/common/infrastructure/persistance/RepositoriProvider";

describe("UpdateCourse", () => {
    it("debe actualizar un curso existente", async () => {
        const course = new Course(1, "Curso Original", "Descripción Original", 100);
        await provider.get(RepositoryType.COURSES).create(course);

        await updateCourse.handle({
            id: 1,
            name: "Curso Actualizado",
            description: "Descripción Actualizada",
            price: 150,
        });

        const updatedCourse = await provider.get(RepositoryType.COURSES).findById(1);
        expect(updatedCourse).not.toBeNull();
        expect(updatedCourse?.name).toBe("Curso Actualizado");
    });

    it("debe lanzar error si el curso no existe", async () => {
        await expect(
            updateCourse.handle({
                id: 99,
                name: "Curso Fantasma",
                description: "No existe",
                price: 200,
            })
        ).rejects.toThrow("Course not found");
    });

    let provider: RepositoryProvider;
    let updateCourse: UpdateCourse;

    beforeEach(() => {
        provider = new RepositoryProvider(true);
        updateCourse = new UpdateCourse(provider);
    });
});
