import { HttpService } from "@/modules/core/http/HttpService";
import { AuthService } from "@/modules/users/AuthHttpService";
import {anything, instance, mock, when} from "ts-mockito";


describe("AuthService", () => {
    it("debería retornar un token si el login es exitoso", async () => {
        when(httpMock.post("/auth/login", anything())).thenResolve({ token: "mocked-token" });

        const token = await authService.login("admin@example.com", "123456");

        expect(token).toBe("mocked-token");
    });

    beforeEach(() => {
        httpMock = mock<HttpService>();
        authService = new AuthService(instance(httpMock));
    });

    let httpMock: HttpService;
    let authService: AuthService;
});
