import {Router} from "express";
import {RepositoryProvider} from "../../modules/common/infrastructure/persistance/RepositoriProvider";
import {CreateCourse} from "../../modules/courses/application/CreateCourse";
import {Dispatcher} from "../dispatcher/Dispatcher";
import {UpdateCourse} from "../../modules/courses/application/UpdateCourse";


export class CoursesController {
    public readonly router: Router;

    constructor(private repositories: RepositoryProvider) {
        this.router = Router();
        this.initRoutes();
    }

    private initRoutes() {
        const createCourseHandler = new CreateCourse(this.repositories);
        const updateCourseHandler = new UpdateCourse(this.repositories);

        Dispatcher.register(this.router, "post", "/courses", createCourseHandler.handle.bind(createCourseHandler));
        Dispatcher.register(this.router, "put", "/courses/:id", updateCourseHandler.handle.bind(updateCourseHandler));
    }
}
