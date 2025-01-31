import {Router} from "@/modules/core/Router/Router";
import {SidebarPresenter} from "@/ui/screens/dashboard/Sidebar/SidebarPresenter";
import {SidebarModel} from "@/ui/screens/dashboard/Sidebar/SidebarModel";
import each from "jest-each";
import {SidebarItem} from "@/ui/screens/dashboard/Sidebar/SidebarItem";

describe("SidebarPresenter", () => {
    each([
        [true, false],
        [false, true],
    ]).it("debería alternar el estado de apertura del sidebar", (current: boolean, expected: boolean) => {
        model.isOpen = current;

        presenter.toggle();

        expect(model.isOpen).toBe(expected);
        expect(onModelChangeMock).toHaveBeenCalledWith(model);
    });

    it("debería navegar a la ruta del item", () => {
        const item: SidebarItem = { path: "/dashboard", title: "Dashboard", icon: null };
        model.isOpen = true;

        presenter.itemClicked(item);

        expect(routerMock.navigate).toHaveBeenCalledWith("/dashboard");
        expect(onModelChangeMock).toHaveBeenCalledWith(model);
    });

    beforeEach(() => {
        routerMock = { navigate: jest.fn() };
        onModelChangeMock = jest.fn();
        model = { isOpen: false };

        presenter = new SidebarPresenter(routerMock, model, onModelChangeMock);
    });

    let routerMock: Router;
    let onModelChangeMock: jest.Mock;
    let model: SidebarModel;
    let presenter: SidebarPresenter;
});
