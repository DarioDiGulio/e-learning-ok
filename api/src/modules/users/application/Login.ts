import {Users} from "../domain/Users";
import {RandomUUIDGenerator} from "../../common/infrastructure/UUIDGenerator/RandomUUIDGenerator";


interface LoginParams {
    username: string;
    password: string;
}

export class Login {
    constructor(private userRepository: Users, private uuidGenerator: RandomUUIDGenerator) {}

    async handle(params: LoginParams): Promise<{ sessionToken: string }> {
        const { username, password } = params;

        const user = await this.userRepository.findByUsername(username);
        if (!user) {
            throw new Error("Invalid credentials");
        }

        // Validar contraseña (esto debería ser un hash en producción)
        if (user.password !== password) {
            throw new Error("Invalid credentials");
        }

        // Generar un nuevo sessionToken
        const sessionToken = this.uuidGenerator.generateUUID();

        // Actualizar la sesión en la base de datos
        await this.userRepository.updateSessionToken(user.id, sessionToken);

        return { sessionToken };
    }
}
