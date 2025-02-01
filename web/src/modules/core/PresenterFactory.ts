import {HomePresenter} from "@/ui/screens/public/Home/HomePresenter";
import {NextRouterAdapter} from "./Router/NextRouter";
import {useRouter} from "next/router";
import {LoginPresenter} from "@/ui/screens/public/LoginPage/LoginPresenter";
import {LoginModel} from "@/ui/screens/public/LoginPage/LoginModel";
import {DashboardModel} from "@/ui/screens/dashboard/Layout/DashboardModel";
import {DashboardPresenter} from "@/ui/screens/dashboard/Layout/DashboardPagePresenter";
import {LogoutPresenter} from "@/ui/screens/dashboard/Sections/Logout/LogoutPresenter";
import {SidebarPresenter} from "@/ui/screens/dashboard/Sidebar/SidebarPresenter";
import {SidebarModel} from "@/ui/screens/dashboard/Sidebar/SidebarModel";
import {Dispatcher} from "@/modules/core/Dispatcher/Dispatcher";
import {Router} from "@/modules/core/Router/Router";

export class PresenterFactory {
    private nextRouter = useRouter();
    private readonly router: Router;

    constructor(private dispatcher: Dispatcher) {
        this.router = new NextRouterAdapter(this.nextRouter);
    }

    homePresenter = (): HomePresenter => new HomePresenter(this.router);
    loginPresenter = (initialModel: LoginModel, onModelChange: (model: LoginModel) => void): LoginPresenter => new LoginPresenter(this.router, initialModel, onModelChange, this.dispatcher);
    dashboardPresenter = (initialModel: DashboardModel, onModelChange: (model: DashboardModel) => void): DashboardPresenter => new DashboardPresenter(this.router, initialModel, onModelChange);
    logoutPresenter = (): LogoutPresenter => new LogoutPresenter(this.router);
    sideBarPresenter = (initialModel: SidebarModel, onModelChange: (model: SidebarModel) => void): SidebarPresenter => new SidebarPresenter(this.router, initialModel, onModelChange);
}
