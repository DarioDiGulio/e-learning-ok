import {useMemo, useState} from "react";
import { PresenterFactory } from "@/modules/core/PresenterFactory";
import { LoginModel } from "@/ui/LoginPage/LoginModel";

export const usePresenter = () => {
    const [loginModel, setLoginModel] = useState(new LoginModel());
    const factory = new PresenterFactory();

    const homePresenter = factory.homePresenter();
    const loginPresenter = useMemo(() => {
        return factory.loginPresenter(loginModel, (updatedModel) => {
            setLoginModel({ ...updatedModel });
        });
    }, [factory, loginModel]);

    return {
        homePresenter,
        loginPresenter,
    };
};
