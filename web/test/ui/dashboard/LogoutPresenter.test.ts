import {LogoutPresenter} from "@/ui/screens/dashboard/Sections/Logout/LogoutPresenter";
import {Router} from "@/modules/core/Router/Router";

describe("LogoutPresenter", () => {
    it('should logout', () => {
        presenter.logout();

        expect(router.navigate).toHaveBeenCalledWith('/login');
    });

    beforeEach(() => {
        router = {navigate: jest.fn()};
        presenter = new LogoutPresenter(router);
    });

    let router: Router;
    let presenter: LogoutPresenter;
});