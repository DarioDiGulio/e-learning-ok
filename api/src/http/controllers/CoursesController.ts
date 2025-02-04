import {Router} from "express";
import {RepositoryProvider} from "../../modules/common/infrastructure/persistance/RepositoriProvider";
import {CreateCourse} from "../../modules/courses/application/CreateCourse";
import {Dispatcher} from "../dispatcher/Dispatcher";


export class CoursesController {
    public readonly router: Router;

    constructor(private repositories: RepositoryProvider) {
        this.router = Router();
        this.initRoutes();
    }

    private initRoutes() {
        const createCourseHandler = new CreateCourse(this.repositories);
        Dispatcher.register(this.router, "post", "/courses", createCourseHandler.handle.bind(createCourseHandler));
    }
}
