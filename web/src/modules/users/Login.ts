import { Action } from "@/modules/core/Dispatcher/Action";
import {AuthService} from "@/modules/users/AuthHttpService";

export class Login implements Action<LoginRequest, Promise<LoginResponse>> {
    constructor(private authService: AuthService) {}

    async execute(request: LoginRequest): Promise<LoginResponse> {
        const token = await this.authService.login(request.email, request.password);
        return { token };
    }
}

export interface LoginResponse {
    token: string;
}

export interface LoginRequest {
    email: string;
    password: string;
}