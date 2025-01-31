import {usePresenter} from "@/ui/react/hooks/usePresenters";
import React from "react";

const Logout: React.FC = () => {
    const presenter = usePresenter().logoutPresenter
    presenter.logout()
    return null;
}

export default Logout;