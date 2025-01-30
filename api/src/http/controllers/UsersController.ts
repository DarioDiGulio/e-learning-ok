import {Router} from "express";
import {Dispatcher} from "../dispatcher/Dispatcher";
import {CreateUser} from "../../modules/users/application/CreateUser";
import {Login} from "../../modules/users/application/Login";
import {RandomUUIDGenerator} from "../../modules/common/infrastructure/UUIDGenerator/RandomUUIDGenerator";
import {Users} from "../../modules/users/domain/Users";

export class UsersController {
    public readonly router: Router;

    constructor(private userRepository: Users, private uuideGenerator: RandomUUIDGenerator) {
        this.router = Router();
        this.initRoutes();
    }

    private initRoutes() {
        const createUserHandler = new CreateUser(this.userRepository);
        const loginHandler = new Login(this.userRepository, this.uuideGenerator);

        Dispatcher.register(this.router, "post", "/users", createUserHandler.handle.bind(createUserHandler));
        Dispatcher.register(this.router, "post", "/login", loginHandler.handle.bind(loginHandler));
    }
}
