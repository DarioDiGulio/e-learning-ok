import {AuthService} from "@/modules/users/AuthHttpService";
import {Dispatcher} from "@/modules/core/Dispatcher/Dispatcher";
import {HttpService} from "@/modules/core/http/HttpService";
import {Login} from "@/modules/users/Login";

export class UsersModule {
    private authService: AuthService | undefined;

    constructor(httpService: HttpService, private dispatcher: Dispatcher) {
        this.registerServices(httpService);
        this.registerActions();
    }


    private registerServices(httpService: HttpService) {
        this.authService = new AuthService(httpService);
    }

    private registerActions(): void {
        this.dispatcher.register(Login, new Login(this.authService!));
    }
}