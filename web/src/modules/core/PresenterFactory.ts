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

export class PresenterFactory {
    private nextRouter = useRouter();

    homePresenter(): HomePresenter {
        const router = new NextRouterAdapter(this.nextRouter);
        return new HomePresenter(router);
    }

    loginPresenter(initialModel: LoginModel, onModelChange: (model: LoginModel) => void): LoginPresenter {
        const router = new NextRouterAdapter(this.nextRouter);
        return new LoginPresenter(router, initialModel, onModelChange);
    }

    dashboardPresenter(initialModel: DashboardModel, onModelChange: (model: DashboardModel) => void): DashboardPresenter {
        const router = new NextRouterAdapter(this.nextRouter);
        return new DashboardPresenter(router, initialModel, onModelChange);
    }

    logoutPresenter(): LogoutPresenter {
        const router = new NextRouterAdapter(this.nextRouter);
        return new LogoutPresenter(router);
    }

    sideBarPresenter(initialModel: SidebarModel, onModelChange: (model: SidebarModel) => void): SidebarPresenter {
        const router = new NextRouterAdapter(this.nextRouter);
        return new SidebarPresenter(router, initialModel, onModelChange);
    }

}
