import {HttpService} from "@/modules/core/http/HttpService";
import {LoginRequest, LoginResponse} from "@/modules/users/Login";

export class AuthService {
    constructor(private http: HttpService) {}

    async login(email: string, password: string): Promise<string> {
        const response = await this.http.post<LoginRequest, LoginResponse>(
            "/auth/login",
            { email, password }
        );
        return response.token;
    }
}
