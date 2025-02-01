import {useMemo, useState} from "react";
import { PresenterFactory } from "@/modules/core/PresenterFactory";
import { LoginModel } from "@/ui/screens/public/LoginPage/LoginModel";
import {DashboardModel} from "@/ui/screens/dashboard/Layout/DashboardModel";
import {SidebarModel} from "@/ui/screens/dashboard/Sidebar/SidebarModel";
import {dispatcherInstance} from "@/pages/_app";

export const usePresenter = () => {
    const [loginModel, setLoginModel] = useState(new LoginModel());
    const [dashboardModel, setDashboardModel] = useState(new DashboardModel());
    const [sidebarModel, setSidebarModel] = useState(new SidebarModel());
    const factory = new PresenterFactory(dispatcherInstance);
    const logoutPresenter = factory.logoutPresenter();

    const homePresenter = factory.homePresenter();

    const loginPresenter = useMemo(() => {
        return factory.loginPresenter(loginModel, (updatedModel) => {
            setLoginModel({ ...updatedModel });
        });
    }, [factory, loginModel]);

    const dashboardPresenter = useMemo(() => {
        return factory.dashboardPresenter(dashboardModel, (updatedModel) => {
            setDashboardModel({ ...updatedModel });
        });
    }, [factory, dashboardModel]);

    const sidebarPresenter = useMemo(() => {
        return factory.sideBarPresenter(sidebarModel, (updatedModel) => {
            setSidebarModel({ ...updatedModel });
        });
    }, [factory, sidebarModel]);

    return {
        homePresenter,
        loginPresenter,
        dashboardPresenter,
        logoutPresenter,
        sidebarPresenter,
    };
};
