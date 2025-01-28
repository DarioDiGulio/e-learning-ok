import {useMemo, useState} from "react";
import { PresenterFactory } from "@/modules/core/PresenterFactory";
import { LoginModel } from "@/ui/screens/LoginPage/LoginModel";
import {DashboardModel} from "@/ui/screens/Dashboard/DashboardModel";

export const usePresenter = () => {
    const [loginModel, setLoginModel] = useState(new LoginModel());
    const [dashboardModel, setDashboardModel] = useState(new DashboardModel());
    const factory = new PresenterFactory();

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

    return {
        homePresenter,
        loginPresenter,
        dashboardPresenter,
    };
};
