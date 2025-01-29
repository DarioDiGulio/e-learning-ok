import { Router } from "express";
import {Dispatcher} from "../dispatcher/Dispatcher";
import {CreateUser} from "../../modules/users/application/CreateUser";

export class UsersController {
    public readonly router: Router;

    constructor(createUserHandler: CreateUser) {
        this.router = Router();
        this.initRoutes(createUserHandler);
    }

    private initRoutes(createUserHandler: CreateUser) {
        Dispatcher.register(this.router, "post", "/users", createUserHandler.handle.bind(createUserHandler));
    }
}
