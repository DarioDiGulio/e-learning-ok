import { Router } from "@/modules/core/Router/Router";

export class HomePresenter {
    constructor(private router: Router){}

    navigateToLogin = () => this.router.navigate('/login');
}