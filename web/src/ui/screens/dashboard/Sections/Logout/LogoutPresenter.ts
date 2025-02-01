import {Router} from "@/modules/core/Router/Router";

export class LogoutPresenter {
    constructor(private router: Router) {}

    logout = (): void => {
        this.router.navigate("/public/login");
    };
}
