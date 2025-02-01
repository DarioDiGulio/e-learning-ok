import {LoginPresenter} from "@/ui/screens/public/LoginPage/LoginPresenter";
import {Router} from "@/modules/core/Router/Router";
import {LoginModel} from "@/ui/screens/public/LoginPage/LoginModel";
import {Dispatcher} from "@/modules/core/Dispatcher/Dispatcher";
import {anything, instance, mock, verify, when} from "ts-mockito";
import {Login} from "@/modules/users/Login";

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

    it("debería navegar a /home si no hay errores", async () => {
        model.email = "test@example.com";
        model.password = "password123";
        when(dispatcher.execute(Login, anything())).thenResolve();

        await presenter.login();


        verify(router.navigate('/dashboard')).once();
    });

    it("debería notificar errores si los campos están vacíos", () => {
        presenter.login();

        expect(model.errors.email).toBe("El correo electrónico es obligatorio.")
        expect(model.errors.password).toBe("La contraseña es obligatoria.")
        verify(router.navigate('/dashboard')).never();
    });

    it("debería esconder el error de email al corregir el campo, pero mantener el de contraseña", () => {
        model.errors = {
            email: "El correo electrónico es obligatorio.",
            password: "La contraseña es obligatoria.",
        }
        presenter = new LoginPresenter(router, model, onModelChangeMock, dispatcher);

        presenter.updateEmail("test@example.com");

        expect(model.errors.email).toBe(undefined)
        expect(model.errors.password).toBe("La contraseña es obligatoria.")
    });

    it("debería esconder el error de la contraseña al corregir el campo, pero mantener el de email", () => {
        model.errors = {
            email: "El correo electrónico es obligatorio.",
            password: "La contraseña es obligatoria.",
        }
        presenter = new LoginPresenter(router, model, onModelChangeMock, dispatcher);

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
        router = mock<Router>();
        onModelChangeMock = jest.fn();
        dispatcher = mock(Dispatcher);
        model = new LoginModel();
        presenter = new LoginPresenter(instance(router), model, onModelChangeMock, instance(dispatcher));
    });

    let router: Router;
    let onModelChangeMock: jest.Mock;
    let model: LoginModel;
    let presenter: LoginPresenter;
    let dispatcher: Dispatcher;
});
