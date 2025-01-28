import {LoginPresenter} from "@/ui/screens/LoginPage/LoginPresenter";
import {Router} from "@/modules/core/Router/Router";
import {LoginModel} from "@/ui/screens/LoginPage/LoginModel";

describe("LoginPresenter", () => {
    it("debería actualizar el email y notificar el cambio de modelo", () => {
        const email = "test@example.com";

        presenter.updateEmail(email);

        expect(model.email).toBe(email);
    });

    it("debería actualizar la contraseña y notificar el cambio de modelo", () => {
        const password = "password123";

        presenter.updatePassword(password);

        expect(model.password).toBe(password);
    });

    it("debería navegar a /home si no hay errores", () => {
        model.email = "test@example.com";
        model.password = "password123";

        presenter.login();

        expect(routerMock.navigate).toHaveBeenCalledWith("/dashboard");
    });

    it("debería notificar errores si los campos están vacíos", () => {
        presenter.login();

        expect(model.errors.email).toBe("El correo electrónico es obligatorio.")
        expect(model.errors.password).toBe("La contraseña es obligatoria.")
        expect(routerMock.navigate).not.toHaveBeenCalled();
    });

    it("debería esconder el error de email al corregir el campo, pero mantener el de contraseña", () => {
        model.errors = {
            email: "El correo electrónico es obligatorio.",
            password: "La contraseña es obligatoria.",
        }
        presenter = new LoginPresenter(routerMock, model, onModelChangeMock);

        presenter.updateEmail("test@example.com");

        expect(model.errors.email).toBe(undefined)
        expect(model.errors.password).toBe("La contraseña es obligatoria.")
    });

    it("debería esconder el error de la contraseña al corregir el campo, pero mantener el de email", () => {
        model.errors = {
            email: "El correo electrónico es obligatorio.",
            password: "La contraseña es obligatoria.",
        }
        presenter = new LoginPresenter(routerMock, model, onModelChangeMock);

        presenter.updatePassword("135");

        expect(model.errors.password).toBe(undefined)
        expect(model.errors.email).toBe("El correo electrónico es obligatorio.")
    });

    it("debería mostrar un error si el email no es válido", () => {
        presenter.updateEmail("not-an-email");

        presenter.login();

        expect(model.errors.email).toBe("El correo electrónico no es válido.");
    });

    beforeEach(() => {
        routerMock = {navigate: jest.fn()};
        onModelChangeMock = jest.fn();
        model = new LoginModel();
        presenter = new LoginPresenter(routerMock, model, onModelChangeMock);
    });

    let routerMock: Router;
    let onModelChangeMock: jest.Mock;
    let model: LoginModel;
    let presenter: LoginPresenter;
});
