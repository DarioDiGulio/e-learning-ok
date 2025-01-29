import {Router} from "express";
import {CreateUser} from "../../modules/users/application/CreateUser";
import {Dispatcher} from "../dispatcher/Dispatcher";

export class UsersController {
    public readonly router: Router;

    constructor(createUserHandler: CreateUser) {
        this.router = Router();

        Dispatcher.register(
            this.router,
            "post",
            "/users",
            createUserHandler.handle.bind(createUserHandler),
            (req) => ({
                // Transformación del request
                username: req.body.username,
                password: req.body.password,
            })
        );
    }
}
