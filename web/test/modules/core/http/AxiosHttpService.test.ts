import axios from "axios";
import AxiosMockAdapter from "axios-mock-adapter";
import {AxiosHttpService} from "@/modules/core/http/AxiosHttpService";
import {HttpService} from "@/modules/core/http/HttpService";

describe("AxiosHttpService", () => {
    it("debería realizar una solicitud GET y devolver los datos esperados", async () => {
        axiosMock.onGet("/test").reply(200, { message: "Success" });

        const response = await httpService.get<{ message: string }>("/test");

        expect(response).toEqual({ message: "Success" });
    });

    it("debería realizar una solicitud POST y devolver la respuesta esperada", async () => {
        const requestData = { name: "Juan" };
        axiosMock.onPost("/users", requestData).reply(201, { success: true });

        const response = await httpService.post<typeof requestData, { success: boolean }>("/users", requestData);

        expect(response.success).toBe(true);
    });

    it("debería realizar una solicitud PUT y devolver la respuesta esperada", async () => {
        const updateData = { name: "Pedro" };
        axiosMock.onPut("/users/1", updateData).reply(200, { updated: true });

        const response = await httpService.put<typeof updateData, { updated: boolean }>("/users/1", updateData);

        expect(response.updated).toBe(true);
    });

    it("debería realizar una solicitud PATCH y devolver la respuesta esperada", async () => {
        const patchData = { role: "admin" };
        axiosMock.onPatch("/users/1", patchData).reply(200, { patched: true });

        const response = await httpService.patch<typeof patchData, { patched: boolean }>("/users/1", patchData);

        expect(response.patched).toBe(true);
    });

    it("debería realizar una solicitud DELETE y devolver la respuesta esperada", async () => {
        axiosMock.onDelete("/users/1").reply(200, { deleted: true });
        const response = await httpService.delete<{ deleted: boolean }>("/users/1");

        expect(response.deleted).toBe(true);
    });

    it("debería lanzar un error cuando la respuesta es 401", async () => {
        axiosMock.onGet("/protegido").reply(401);
        await expect(httpService.get("/protegido")).rejects.toThrow("No autorizado. Inicia sesión nuevamente.");
    });

    it("debería lanzar un error cuando la respuesta es 403", async () => {
        axiosMock.onGet("/admin").reply(403);
        await expect(httpService.get("/admin")).rejects.toThrow("Acceso denegado. No tienes permisos para realizar esta acción.");
    });

    it("debería lanzar un error cuando la respuesta es 500 con mensaje del servidor", async () => {
        axiosMock.onGet("/error").reply(500, { message: "Error crítico" });
        await expect(httpService.get("/error")).rejects.toThrow("Error interno del servidor: Error crítico");
    });

    it("debería lanzar un error cuando no hay respuesta del servidor", async () => {
        axiosMock.onGet("/offline").networkError();
        await expect(httpService.get("/offline")).rejects.toThrow("No se pudo conectar con el servidor.");
    });

    beforeEach(() => {
        axiosMock = new AxiosMockAdapter(axios);
        httpService = new AxiosHttpService("https://api.example.com");
    });

    afterEach(() => {
        axiosMock.reset();
    });

    let axiosMock: AxiosMockAdapter;
    let httpService: HttpService;
});