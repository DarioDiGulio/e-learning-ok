import {HomePresenter} from "@/ui/screens/public/Home/HomePresenter";
import {NextRouterAdapter} from "./Router/NextRouter";
import {useRouter} from "next/router";
import {LoginPresenter} from "@/ui/screens/public/LoginPage/LoginPresenter";
import {LoginModel} from "@/ui/screens/public/LoginPage/LoginModel";
import {DashboardModel} from "@/ui/screens/dashboard/DashboardModel";
import {DashboardPresenter} from "@/ui/screens/dashboard/DashboardPagePresenter";

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
}
