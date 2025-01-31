import {Router} from "express";
import {Dispatcher} from "../dispatcher/Dispatcher";
import {CreateUser} from "../../modules/users/application/CreateUser";
import {Login} from "../../modules/users/application/Login";
import {RandomUUIDGenerator} from "../../modules/common/infrastructure/UUIDGenerator/RandomUUIDGenerator";
import {RepositoryProvider} from "../../modules/common/infrastructure/persistance/RepositoriProvider";

export class UsersController {
    public readonly router: Router;

    constructor(private repositories: RepositoryProvider, private uuidGenerator: RandomUUIDGenerator) {
        this.router = Router();
        this.initRoutes();
    }

    private initRoutes() {
        const createUserHandler = new CreateUser(this.repositories);
        const loginHandler = new Login(this.repositories, this.uuidGenerator);

        Dispatcher.register(this.router, "post", "/users", createUserHandler.handle.bind(createUserHandler));
        Dispatcher.register(this.router, "post", "/login", loginHandler.handle.bind(loginHandler));
    }
}
