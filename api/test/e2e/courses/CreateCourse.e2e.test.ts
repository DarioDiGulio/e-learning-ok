import request from "supertest";
import { PrismaClient } from "@prisma/client";
import express, { Express } from "express";
import { Application } from "../../../src/http/Application";
import {RepositoryProvider} from "../../../src/modules/common/infrastructure/persistance/RepositoriProvider";
import {CoursesController} from "../../../src/http/controllers/CoursesController";

describe("E2E - Crear Curso", () => {
    it("debe crear un curso exitosamente", async () => {
        const response = await request(app.getServer())
            .post("/courses")
            .send({
                name: "Curso de JavaScript",
                description: "Aprende JS moderno",
                price: 199.99,
            });

        expect(response.status).toBe(200);
        expect(response.body.id).toBeDefined();

        const savedCourse = await prisma.course.findUnique({ where: { id: response.body.id } });
        expect(savedCourse).not.toBeNull();
        expect(savedCourse?.name).toBe("Curso de JavaScript");
    });

    it("debe devolver un error si los datos son inválidos", async () => {
        const response = await request(app.getServer()).post("/courses").send({
            name: "",
            description: "Curso sin nombre",
            price: 50,
        });

        expect(response.status).toBe(400);
        expect(response.body.error).toBe("Invalid course data");
    });

    let app: Application;
    let prisma: PrismaClient;
    let provider: RepositoryProvider;
    let expressApp: Express;

    beforeAll(async () => {
        prisma = new PrismaClient();
        provider = new RepositoryProvider(false);
        expressApp = express();
        expressApp.use(express.json());

        const coursesController = new CoursesController(provider);
        expressApp.use("/courses", coursesController.router);

        app = new Application(expressApp, "3000");

        await prisma.course.deleteMany();
    });

    afterAll(async () => {
        await prisma.$disconnect();
    });
});
