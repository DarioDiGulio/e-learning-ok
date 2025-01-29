import request from "supertest";
import express from "express";
import {Application} from "../../src/http/Application";

describe("StatusController (E2E)", () => {
    it("Debe retornar status 200 con la conexión a la base de datos", async () => {
        const response = await request(app).get("/status");

        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty("status", "ok");
        expect(response.body).toHaveProperty("database");
        expect(["connected", "disconnected"]).toContain(response.body.database);
    });

    beforeAll(() => {
        const server = new Application(express(), '7200');
        app = server.getServer();
    });

    let app: express.Express;
});
