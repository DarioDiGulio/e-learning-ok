import {Router} from "@/modules/core/Router/Router";
import {DashboardModel} from "@/ui/screens/dashboard/Layout/DashboardModel";
import {DashboardPresenter} from "@/ui/screens/dashboard/Layout/DashboardPagePresenter";
import each from "jest-each";

describe("DashboardPage", () => {
    it('should logout', () => {
        presenter.logout();

        expect(routerMock.navigate).toHaveBeenCalledWith('/login');
    });

    it('should start with courses section', () => {
        expect(model.section).toBe('cursos');
    });

    each([
        ['cursos'],
        ['medios-de-pago'],
    ]).it('should change section', (section: string) => {
        presenter.changeSection(section);

        expect(model.section).toBe(section);
    });

    beforeEach(() => {
        routerMock = {navigate: jest.fn()};
        onModelChangeMock = jest.fn();
        model = new DashboardModel();
        presenter = new DashboardPresenter(routerMock, model, onModelChangeMock);
    });

    let routerMock: Router;
    let onModelChangeMock: jest.Mock;
    let model: DashboardModel;
    let presenter: DashboardPresenter;
});